"use client";

import { Button } from "@medusajs/ui";
import { useRef, useState } from "react";

import { useIntersection } from "@/storefront/lib/hooks/use-in-view";

import MobileActions from "../mobile-actions";
import ProductPrice from "../product-price";
import { sendGTMEvent } from "@next/third-parties/google";
import { Product as ShopifyProduct } from "@/storefront/lib/shopify/types";
import { addItem } from "@/storefront/actions/cart";
import { ProductWithCategoryNotes } from "@/sanity/types/product";

type ProductActionsProps = {
  product: ProductWithCategoryNotes;
  shopifyProduct: ShopifyProduct;
};

export type PriceType = {
  calculated_price: string;
  original_price?: string;
  price_type?: "sale" | "default";
  percentage_diff?: string;
};

export default function ProductActions({
  product,
  shopifyProduct,
}: ProductActionsProps): JSX.Element {
  const [isAdding, setIsAdding] = useState(false);

  const variant = shopifyProduct.variants[0];

  const inStock = variant.availableForSale;

  const actionsRef = useRef<HTMLDivElement>(null);

  const inView = useIntersection(actionsRef, "0px");

  // add the selected variant to the cart
  const handleAddToCart = async () => {
    if (!variant?.id) return;
    setIsAdding(true);

    sendGTMEvent({
      event: "add_to_cart",
      value: {
        currency: "SEK",
        value: (parseInt(variant.price.amount) ?? 0) / 100,
        items: [
          {
            item_id: variant.id,
            item_name: product?.store?.title || variant.title,
            item_variant: variant.title,
            price: (parseInt(variant.price.amount) ?? 0) / 100,
            quantity: 1,
          },
        ],
      },
    });

    await addItem(variant.id);
    setIsAdding(false);
  };

  return (
    <>
      <div className="flex flex-col gap-y-2" ref={actionsRef}>
        <ProductPrice variant={variant} />

        <Button
          onClick={handleAddToCart}
          disabled={!inStock || !variant}
          variant="primary"
          className="w-full h-10"
          isLoading={isAdding}
        >
          {!variant
            ? "Välj variant"
            : !inStock
              ? "Slutsåld"
              : "Lägg i varukorgen"}
        </Button>
        <MobileActions
          product={product}
          variant={variant}
          inStock={inStock}
          handleAddToCart={handleAddToCart}
          isAdding={isAdding}
          show={!inView}
        />
      </div>
    </>
  );
}
