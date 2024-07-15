import { ProductWithCategoryNotes } from "@/sanity/types/product";
import ProductPreview from "../product-preview";
import { getCategoriesByPath, getProductRecommendations } from "@/sanity/lib";

type RelatedProductsProps = {
  product: ProductWithCategoryNotes;
};

export default async function RelatedProducts({
  product,
}: RelatedProductsProps) {
  if (!product.store?.gid) {
    return null;
  }

  const relatedProducts = await getProductRecommendations(product.store?.gid);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="product-page-constraint">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="mb-6 text-gray-600 text-base-regular">
          Rekommenderade produkter
        </span>
        <p className="max-w-lg text-2xl-regular text-ui-fg-base">
          Produkter som passar bra ihop med denna produkt
        </p>
      </div>

      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
        {relatedProducts.map((product) => (
          <li key={product._id}>
            <ProductPreview productPreview={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
