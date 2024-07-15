import { developerClient } from '@/sanity/lib/client'
import { sleep } from '@/storefront/lib/utils'
import fs from 'fs'

type JSONProduct = {
   handle: string,
   weight: number | null;
   height: number | null;
   width: number | null;
   length: number | null;
}

async function insertProducts(products: JSONProduct[]) {
   let i = 0;

   for (const p of products) {
      console.log(`Working on product ${p.handle} (${i + 1}/${products.length})`)

      const data: {
         height?: number;
         width?: number;
         length?: number;
         weight?: number;
      } = {}

      if (p.height) {
         data['height'] = p.height
      }

      if (p.width) {
         data['width'] = p.width
      }

      if (p.length) {
         data['length'] = p.length
      }

      if (p.weight) {
         data['weight'] = p.weight
      }

      const product = await developerClient.fetch(`*[_type == 'product' && store.slug.current == '${p.handle}'][0]{ _id }`)

      let product_id = product?._id

      if (!product_id) {
         console.log(`Product ${p.handle} not found`)
         continue
      }

      if (Object.keys(data).length > 0) {
         console.log(`Inserting ${Object.keys(data)}`)
         await developerClient.patch(product_id).set(data).commit()
      }

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