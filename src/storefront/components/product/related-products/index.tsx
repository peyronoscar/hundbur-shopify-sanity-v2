import Link from "next/link";
import { GridTileImage } from "../../grid/tile";
import { getProductRecommendationIds } from "@/storefront/lib/shopify";
import { getProductRecommendations } from "@/sanity/lib";

export async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
      <ul className="flex w-full gap-4 overflow-x-auto pt-1">
        {relatedProducts.map((product) => (
          <li
            key={product._id}
            className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <Link
              className="relative h-full w-full"
              href={`/products/${product.store?.slug?.current}`}
            >
              <GridTileImage
                alt={product.store?.title || "Related product"}
                label={{
                  title: product.store?.title || "Related product",
                  amount:
                    product.store?.priceRange?.maxVariantPrice?.toString(),
                  currencyCode: "SEK",
                }}
                src={product.store?.previewImageUrl}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
