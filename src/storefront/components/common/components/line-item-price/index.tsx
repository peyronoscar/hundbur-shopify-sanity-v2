import { CartItem } from "@/storefront/lib/shopify/types";
import { formatAmount } from "@/storefront/lib/util/prices";

type LineItemPriceProps = {
  item: CartItem;
};

const LineItemPrice = ({ item }: LineItemPriceProps) => {
  return (
    <div className="flex flex-col gap-x-2 text-ui-fg-subtle items-end">
      <div className="text-left">
        <span>
          {formatAmount({
            amount: item.cost.totalAmount.amount,
            currencyCode: item.cost.totalAmount.currencyCode,
          })}
        </span>
      </div>
    </div>
  );
};

export default LineItemPrice;
