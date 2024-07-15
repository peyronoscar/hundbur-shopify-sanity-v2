import { getCart } from "@/storefront/lib/shopify";
import CartDropdown from "../cart-dropdown";

export default async function CartButton() {
  const cart = await getCart();

  return <CartDropdown cart={cart} />;
}
