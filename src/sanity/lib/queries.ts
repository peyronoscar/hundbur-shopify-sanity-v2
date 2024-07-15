import { SortOptions } from "@/storefront/components/store/components/refinement-list/sort-products";
import { PaginatedProductsParams } from "@/storefront/components/store/templates/paginated-products";
import { groq } from "next-sanity";

export const settingsQuery = groq`*[_type == "settings"][0]`;

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{"name": coalesce(name, "Anonymous"), picture},
`;

export const heroQuery = groq`*[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) [0] {
  content,
  ${postFields}
}`;

export const moreStoriesQuery = groq`*[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
  ${postFields}
}`;

export const postQuery = groq`*[_type == "post" && slug.current == $slug] [0] {
  content,
  ${postFields}
}`;

export const categoriesQuery = groq`*[_type == "category" && !defined(parent)]{
    ...,
    "product_count": count(*[_type=="product" && references(^._id)])
}`;

export const categoryTreeQuery = groq`*[_type == "category" && !defined(parent)]{
    ...,
    "product_count": count(*[_type=="product" && references(^._id)]),
    "category_children": *[_type=="category" && parent._ref == ^._id]{
      ...,
      "product_count": count(*[_type=="product" && references(^._id)]),
      "category_children": *[_type=="category" && parent._ref == ^._id]{
        ...,
        "product_count": count(*[_type=="product" && references(^._id)])
      }
    }
}`;

// export const categoriesByPathQuery = groq`*[_type == "category" && slug.current in $slugs]{
//     ...,
//     "product_count": count(*[_type == "product" && (references(*[_type == "category" && ^.^._id in path[]._ref]._id) || references(^._id))]),
//     "category_children": *[_type=="category" && parent._ref == ^._id]{
//       ...,
//       "product_count": count(*[_type == "product" && (references(*[_type == "category" && ^.^._id in path[]._ref]._id) || references(^._id))])
//     }
// }`;

// export const categoriesByPathQuery = groq`*[_type == "category" && slug.current in $slugs]{
//     ...,
//     "product_count": count(*[_type == "product" && ^._id in category->path[]._ref]),
//     "category_children": *[_type=="category" && parent._ref == ^._id]{
//       ...,
//       "product_count": count(*[_type == "product" && ^._id in category->path[]._ref])
//     }
// }`;

export const categoriesByPathQuery = groq`*[_type == "category" && slug.current in $slugs]{
    ...,
    "product_count": count(*[_type == "product" && references(^._id)]),
    "category_children": *[_type=="category" && parent._ref == ^._id]{
      ...,
      "product_count": count(*[_type == "product" && references(^._id)])
    }
}`;

export const categoryProductsQuery = groq`*[_type == "product" && references($id) && store.status == "active"] | order(defined(sales) desc, sales desc, _createdAt desc){
  ...,
  "sales": null
}`;

export const categoryPathQuery = groq`*[_type == "category" && _id == $id][0]{ path }`
export const categoriesPathQuery = groq`*[_type == "category" && _id in $id]{ path }`

export const productByHandleQuery = groq`*[_type == "product" && store.slug.current == $slug][0]{
  ...,
  categoryNotes[]{
    ...,
    category->
  }
}`

export const productTypesQuery = groq`array::unique(*[_type == "product"].store.productType)`;

export const productVendorsQuery = groq`array::unique(*[_type == "product"].store.vendor)`;

function sortOrder(order: SortOptions | undefined) {
  switch (order) {
    case "price_asc":
      return "store.priceRange.maxVariantPrice asc";
    case "price_desc":
      return "store.priceRange.maxVariantPrice desc";
    case "title":
      return "store.title asc";
    case "created_at":
      return "createdAt desc";
    case "best_selling":
      return "defined(sales) desc, sales desc";
    default:
      return "createdAt desc";
  }
}

export const productsQuery = ({ queryParams, productCount, page }: {
  queryParams: PaginatedProductsParams;
  productCount: number;
  page: number;
}) => {
  const { category_id, type_id, vendor_id, id, limit } = queryParams
  const orderFilter = `order(${sortOrder(queryParams.order)})`
  const categoryFilter = category_id ? `references("${category_id}")` : "true";
  const typeFilter = type_id ? `store.productType == "${decodeURIComponent(type_id[0])}"` : "true";
  const vendorFilter = vendor_id ? `store.vendor == "${decodeURIComponent(vendor_id[0])}"` : "true";
  const productIdsFilter = id ? `store.id in [${id.map(i => `${i}`).join(", ")}]` : "true";
  const pageFilter = `[${(page - 1) * limit}..${page * limit}]`

  return `*[_type == "product" && store.status == "active" && ${categoryFilter} && ${typeFilter} && ${vendorFilter} && ${productIdsFilter}] | ${orderFilter} ${pageFilter}{
  ...,
  "sales": null
}`
};

export const productsCountQuery = ({ queryParams }: {
  queryParams: PaginatedProductsParams;
}) => {
  const { category_id, type_id, vendor_id, id } = queryParams
  const categoryFilter = category_id ? `references("${category_id}")` : "true";
  const typeFilter = type_id ? `store.productType == "${decodeURIComponent(type_id[0])}"` : "true";
  const vendorFilter = vendor_id ? `store.vendor == "${decodeURIComponent(vendor_id[0])}"` : "true";
  const productIdsFilter = id ? `store.id in [${id.map(i => `${i}`).join(", ")}]` : "true";

  return `count(*[_type == "product" && store.status == "active" && ${categoryFilter} && ${typeFilter} && ${vendorFilter} && ${productIdsFilter}])`
};

export const productsQueryTemplate = groq`*[_type == "product" && store.status == "active"]{
  ...,
  "sales": null
}`

export const productsByIdsQuery = groq`*[_type == "product" && _id in $ids]`