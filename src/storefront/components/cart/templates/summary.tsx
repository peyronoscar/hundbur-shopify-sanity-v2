"use client";

import { Button, Heading } from "@medusajs/ui";

import CartTotals from "@/storefront/components/common/components/cart-totals";
import Divider from "@/storefront/components/common/components/divider";
import LocalizedClientLink from "@/storefront/components/common/components/localized-client-link";
import { Cart } from "@/storefront/lib/shopify/types";
import { sendGTMEvent } from "@next/third-parties/google";

type SummaryProps = {
  cart: Cart;
};

const Summary = ({ cart }: SummaryProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <Heading level="h2" className="text-[2rem] leading-[2.75rem]">
        Sammanfattning
      </Heading>
      <Divider />
      <CartTotals data={cart} />
      <Button
        className="w-full h-10"
        onClick={() =>
          sendGTMEvent({
            event: "begin_checkout",
          })
        }
        asChild
      >
        <a href={cart.checkoutUrl}>Gå till kassan</a>
      </Button>
    </div>
  );
};

export default Summary;
