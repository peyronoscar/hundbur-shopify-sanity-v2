import { Text } from "@medusajs/ui";

import Thumbnail from "../thumbnail";
import PreviewPrice from "./price";
import { Product } from "@/sanity.types";
import Link from "next/link";
import { getProduct } from "@/storefront/lib/shopify";

export default async function ProductPreview({
  productPreview,
  isFeatured,
  categoryHandle,
}: {
  productPreview: Omit<Product, "sales">;
  isFeatured?: boolean;
  categoryHandle?: string[];
}) {
  if (!productPreview.store?.slug?.current) {
    return null;
  }

  const shopifyProduct = await getProduct(productPreview.store?.slug?.current);

  if (!shopifyProduct) {
    return null;
  }

  const variant = shopifyProduct.variants[0];

  return (
    <Link
      href={
        categoryHandle
          ? `/products/${categoryHandle.join("/")}/${productPreview.store.slug.current}`
          : `/products/${productPreview.store.slug.current}`
      }
      className="group"
    >
      <div>
        <Thumbnail
          thumbnail={productPreview.store?.previewImageUrl}
          size="full"
          isFeatured={isFeatured}
        />
        <div className="mt-4 txt-compact-medium">
          <Text className="text-ui-fg-subtle font-semibold">
            {productPreview.store?.title}
          </Text>
          <div className="flex items-center gap-x-2">
            <PreviewPrice price={variant.price} />
          </div>
        </div>
      </div>
    </Link>
  );
}
