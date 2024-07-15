import { Metadata } from "next";

import { getCart } from "@/storefront/lib/shopify";
import CartTemplate from "@/storefront/components/cart/templates";

export const metadata: Metadata = {
  title: "Varukorg",
  description: "Visa din varukorg och gå vidare till kassan.",
};

export default async function Cart() {
  const cart = await getCart();

  return <CartTemplate cart={cart} />;
}
