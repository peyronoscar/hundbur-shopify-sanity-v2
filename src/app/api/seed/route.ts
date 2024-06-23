import { developerClient } from '@/sanity/lib/client'
import { sleep } from '@/storefront/lib/utils'
import fs from 'fs'
import { nanoid } from 'nanoid'

type JSONCategory = {
   id: string
   title: string
   handle: string
}

type JSONProduct = {
   id: string
   title: string
   handle: string
   category_leaves: JSONCategory[],
   category_branches: JSONCategory[]
}

async function insertProducts(products: JSONProduct[]) {
   let i = 0;

   for (const p of products) {
      if (i < 120) {
         i++
         continue
      }
      console.log(`Working on product ${p.handle} (${i + 1}/${products.length})`)

      const product = await developerClient.fetch(`*[_type == 'product' && store.slug.current == '${p.handle}'][0]{ _id }`)

      let product_id = product?._id

      if (!product_id) {
         console.log(`Product ${p.handle} not found`)
         continue
      }

      const path = p.category_branches.map(c => ({ _type: 'reference', _ref: c.id, _key: nanoid() }))
      const categories = p.category_leaves.map(c => ({ _type: 'reference', _ref: c.id, _key: nanoid() }))

      console.log(`Inserting ${categories.length} categories and ${path.length} paths`)

      await developerClient.patch(product_id).set({
         categories,
         categoryPath: path
      }).commit()

      await sleep(500)

      i++
   }
}

export async function POST() {
   // Read categories from categories.json
   const products: JSONProduct[] = JSON.parse(fs.readFileSync('products.json', 'utf8'))

   // await insertCategoryChildren({ category_children: categories, parent: null })

   await insertProducts(products)

   return Response.json({ message: 'Hello World' })
}