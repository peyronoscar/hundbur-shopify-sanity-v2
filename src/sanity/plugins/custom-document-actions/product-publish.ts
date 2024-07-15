import { useState, useEffect } from 'react'
import { useClient } from 'sanity'
import { useDocumentOperation } from 'sanity'
import { apiVersion } from '../../lib/api'
import { categoriesPathQuery, categoryPathQuery } from '../../lib/queries'
import { CategoriesPathQueryResult, Category, CategoryPathQueryResult, Product } from '@/sanity.types'
import { CategoryActionProps, ProductActionProps } from './types'
import { nanoid } from 'nanoid'

export function ProductPublish(props: ProductActionProps) {
   const {
      draft,
      published,
   }: {
      draft: Product;
      published: Product;
   } = props;

   const { patch, publish } = useDocumentOperation(props.id, props.type)
   const [isPublishing, setIsPublishing] = useState(false)
   const client = useClient({ apiVersion })

   useEffect(() => {
      // if the isPublishing state was set to true and the draft has changed
      // to become `null` the document has been published
      if (isPublishing && !draft) {
         setIsPublishing(false)
      }
   }, [draft, isPublishing])

   return {
      disabled: !!publish.disabled,
      label: isPublishing ? 'Publishing...' : 'Publish & Update',
      // TODO: Implement onHandle
      onHandle: async () => {
         // This will update the button text
         setIsPublishing(true)

         console.log(draft, draft.categories, draft.categories?.length)


         if (draft && draft.categories && draft.categories.length > 0) {
            const parentPaths: CategoriesPathQueryResult = await client.fetch(categoriesPathQuery, { id: draft.categories.map(c => c._ref) ?? "" })
            const allPathIds = parentPaths.map(path => path.path).flat().map(path => path?._ref)

            // Filter out the unique paths
            const uniquePathIds = allPathIds.filter((id, index) => allPathIds.indexOf(id) === index)

            const parentPathArray = uniquePathIds.map(id => ({ _ref: id, _type: "reference", _key: nanoid() })) ?? []

            // Set the path
            patch.execute([{ set: { categoryPath: parentPathArray } }])
         }

         if (draft && (!draft.categories || draft.categories.length === 0)) {
            // Set the path
            patch.execute([{ set: { categoryPath: [] } }])
         }

         // Perform the publish
         publish.execute()

         // Signal that the action is completed
         props.onComplete()
      },
   }
}