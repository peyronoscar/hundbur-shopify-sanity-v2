import { getPaginatedProducts } from "@/sanity/lib";
import { Pagination } from "@/storefront/components/store/components/pagination";
import { SortOptions } from "@/storefront/components/store/components/refinement-list/sort-products";
import ProductPreview from "../../products/components/product-preview";

const PRODUCT_LIMIT = 30;

export type PaginatedProductsParams = {
  limit: number;
  collection_id?: string[];
  category_id?: string[];
  vendor_id?: string[];
  type_id?: string[];
  id?: string[];
  order?: SortOptions;
};

export default async function PaginatedProducts({
  order,
  page,
  collectionId,
  categoryId,
  vendorId,
  typeId,
  productsIds,
}: {
  order?: SortOptions;
  page: number;
  collectionId?: string;
  categoryId?: string;
  vendorId?: string;
  typeId?: string;
  productsIds?: string[];
}) {
  const queryParams: PaginatedProductsParams = {
    limit: PRODUCT_LIMIT,
  };

  if (collectionId) {
    queryParams["collection_id"] = [collectionId];
  }

  if (categoryId) {
    queryParams["category_id"] = [categoryId];
  }

  if (vendorId) {
    queryParams["vendor_id"] = [vendorId];
  }

  if (typeId) {
    queryParams["type_id"] = [typeId];
  }

  if (productsIds) {
    queryParams["id"] = productsIds;
  }

  if (order) {
    queryParams["order"] = order;
  }

  const { products, totalPages } = await getPaginatedProducts({
    queryParams,
    page,
  });

  return (
    <>
      <ul className="grid w-full grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
        {products.map((p) => {
          return (
            <li key={p._id}>
              <ProductPreview productPreview={p} />
            </li>
          );
        })}
        {products.length === 0 && <p>Inga produkter hittades.</p>}
      </ul>
      {totalPages > 1 && <Pagination page={page} totalPages={totalPages} />}
    </>
  );
}
