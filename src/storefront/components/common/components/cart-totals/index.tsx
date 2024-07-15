"use client";

import { Cart } from "@/storefront/lib/shopify/types";
import { formatAmount } from "@/storefront/lib/util/prices";
import { InformationCircleSolid } from "@medusajs/icons";
import { Tooltip } from "@medusajs/ui";
import React from "react";

type CartTotalsProps = {
  data: Cart;
};

const getAmount = (amount: string | null | undefined, currencyCode: string) => {
  return formatAmount({
    amount: amount || "0",
    currencyCode,
  });
};

const CartTotals: React.FC<CartTotalsProps> = ({ data }) => {
  const {
    cost: { subtotalAmount, totalAmount, totalTaxAmount },
  } = data;

  return (
    <div>
      <div className="flex flex-col gap-y-2 txt-medium text-ui-fg-subtle ">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-x-1">
            Delsumma
            <Tooltip content="Total i kundvagnen exklusive frakt.">
              <InformationCircleSolid color="var(--fg-muted)" />
            </Tooltip>
          </span>
          <span>
            {getAmount(subtotalAmount.amount, subtotalAmount.currencyCode)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Frakt</span>
          <span>Beräknas i kassan</span>
        </div>
      </div>
      <div className="w-full h-px my-4 border-b border-gray-200" />
      <div className="flex items-center justify-between mb-2 text-ui-fg-base txt-medium ">
        <span>Totalt</span>
        <span className="txt-xlarge-plus">
          {getAmount(totalAmount.amount, totalAmount.currencyCode)}
        </span>
      </div>
      <div className="w-full h-px mt-4 border-b border-gray-200" />
    </div>
  );
};

export default CartTotals;
