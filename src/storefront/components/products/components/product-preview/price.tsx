import { Text, clx } from "@medusajs/ui";

import { Money } from "@/storefront/lib/shopify/types";
import { formatAmount } from "@/storefront/lib/util/prices";

export default async function PreviewPrice({ price }: { price: Money }) {
  const isSale = false;

  return (
    <>
      {isSale && (
        <Text className="line-through text-muted-foreground">
          {formatAmount({
            amount: price.amount,
            currencyCode: price.currencyCode,
          })}
        </Text>
      )}
      <Text
        className={clx("text-muted-foreground", {
          "text-ui-fg-interactive": isSale,
        })}
      >
        {formatAmount({
          amount: price.amount,
          currencyCode: price.currencyCode,
        })}
      </Text>
    </>
  );
}
