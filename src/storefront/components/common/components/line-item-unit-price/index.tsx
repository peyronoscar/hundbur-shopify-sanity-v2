import { CartItem } from "@/storefront/lib/shopify/types";
import { getPercentageDiff } from "@/storefront/lib/util/get-precentage-diff";
import { formatAmount } from "@/storefront/lib/util/prices";
import { clx } from "@medusajs/ui";

type LineItemUnitPriceProps = {
  item: CartItem;
  style?: "default" | "tight";
};

const LineItemUnitPrice = ({
  item,
  style = "default",
}: LineItemUnitPriceProps) => {
  const originalPrice = item.cost.amountPerQuantity.amount;
  const hasReducedPrice =
    (parseInt(originalPrice) * item.quantity || 0) >
    parseInt(item.cost.totalAmount.amount)!;
  const reducedPrice =
    (parseInt(item.cost.totalAmount.amount) || 0) / item.quantity!;

  return (
    <div className="flex flex-col text-muted-foreground justify-center h-full">
      {hasReducedPrice && (
        <>
          <p>
            {style === "default" && (
              <span className="text-muted-foreground">Original: </span>
            )}
            <span className="line-through">
              {formatAmount({
                amount: originalPrice,
                currencyCode: item.cost.amountPerQuantity.currencyCode,
              })}
            </span>
          </p>
          {style === "default" && (
            <span className="text-ui-fg-interactive">
              -{getPercentageDiff(parseInt(originalPrice), reducedPrice || 0)}%
            </span>
          )}
        </>
      )}
      <span
        className={clx("text-base-regular", {
          "text-ui-fg-interactive": hasReducedPrice,
        })}
      >
        {formatAmount({
          amount:
            reducedPrice.toString() ||
            item.cost.amountPerQuantity.amount ||
            "0",
          currencyCode: item.cost.totalAmount.currencyCode,
        })}
      </span>
    </div>
  );
};

export default LineItemUnitPrice;
