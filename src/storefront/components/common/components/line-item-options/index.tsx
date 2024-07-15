import { CartItem } from "@/storefront/lib/shopify/types";
import { Text } from "@medusajs/ui";

type LineItemOptionsProps = { item: CartItem };

const LineItemOptions = ({ item }: LineItemOptionsProps) => {
  if (item.merchandise.title === "Default Title") return null;

  return (
    <Text className="inline-block w-full overflow-hidden txt-medium text-ui-fg-subtle text-ellipsis">
      Variant: {item.merchandise.title}
    </Text>
  );
};

export default LineItemOptions;
