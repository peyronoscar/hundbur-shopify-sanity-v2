import { ProductVariant } from "@/storefront/lib/shopify/types";
import { formatAmount } from "@/storefront/lib/util/prices";
import { clx } from "@medusajs/ui";

export default function ProductPrice({
  variant,
}: {
  variant?: ProductVariant;
}) {
  const isSale = false;
  const selectedPrice = variant?.price;

  return (
    <div className="flex flex-col text-ui-fg-base">
      <span
        className={clx("text-xl-semi", {
          "text-ui-fg-interactive": isSale,
        })}
      >
        {formatAmount({
          amount: selectedPrice?.amount,
          currencyCode: selectedPrice?.currencyCode,
        })}
      </span>
      {isSale && (
        <>
          <p>
            <span className="text-ui-fg-subtle">Original: </span>
            <span className="line-through">
              {formatAmount({
                amount: selectedPrice?.amount,
                currencyCode: selectedPrice?.currencyCode,
              })}
            </span>
          </p>
          <span className="text-ui-fg-interactive">-0%</span>
        </>
      )}
    </div>
  );
}
