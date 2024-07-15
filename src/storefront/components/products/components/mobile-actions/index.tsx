import { Transition } from "@headlessui/react";
import { Button, clx } from "@medusajs/ui";
import React, { Fragment } from "react";

import { ProductVariant } from "@/storefront/lib/shopify/types";
import { formatAmount } from "@/storefront/lib/util/prices";
import { ProductWithCategoryNotes } from "@/sanity/types/product";

type MobileActionsProps = {
  product: ProductWithCategoryNotes;
  variant: ProductVariant;
  inStock?: boolean;
  handleAddToCart: () => void;
  isAdding?: boolean;
  show: boolean;
};

const MobileActions: React.FC<MobileActionsProps> = ({
  product,
  variant,
  inStock,
  handleAddToCart,
  isAdding,
  show,
}) => {
  const selectedPrice = variant.price;
  const isSale = false;

  return (
    <>
      <div
        className={clx("lg:hidden inset-x-0 bottom-0 fixed z-10", {
          "pointer-events-none": !show,
        })}
      >
        <Transition
          as={Fragment}
          show={show}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-white border-t border-gray-200 gap-y-3 text-large-regular">
            <div className="flex items-center gap-x-2">
              <span>{product.store?.title}</span>
              <span>—</span>
              {selectedPrice ? (
                <div className="flex items-end gap-x-2 text-ui-fg-base">
                  {isSale && (
                    <p>
                      <span className="line-through text-small-regular">
                        {formatAmount({
                          amount: selectedPrice.amount,
                          currencyCode: selectedPrice.currencyCode,
                        })}
                      </span>
                    </p>
                  )}
                  <span
                    className={clx({
                      "text-ui-fg-interactive": isSale,
                    })}
                  >
                    {formatAmount({
                      amount: selectedPrice.amount,
                      currencyCode: selectedPrice.currencyCode,
                    })}
                  </span>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="grid w-full grid-cols-2 gap-x-4">
              <Button
                onClick={handleAddToCart}
                disabled={!inStock || !variant}
                className="w-full"
                isLoading={isAdding}
              >
                {!variant
                  ? "Välj variant"
                  : !inStock
                    ? "Slutsåld"
                    : "Lägg i varukorgen"}
              </Button>
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
};

export default MobileActions;
