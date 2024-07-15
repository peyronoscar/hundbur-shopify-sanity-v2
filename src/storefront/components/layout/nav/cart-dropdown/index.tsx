"use client";

import { Popover, Transition } from "@headlessui/react";
import { Button } from "@medusajs/ui";
import { useParams, usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";

import DeleteButton from "@/storefront/components/common/components/delete-button";
import LineItemOptions from "@/storefront/components/common/components/line-item-options";
import LineItemPrice from "@/storefront/components/common/components/line-item-price";
import Thumbnail from "@/storefront/components/products/components/thumbnail";
import { ShoppingBag } from "lucide-react";
import { Cart } from "@/storefront/lib/shopify/types";
import Link from "next/link";
import { formatAmount } from "@/storefront/lib/util/prices";

const CartDropdown = ({ cart: cartState }: { cart?: Cart }) => {
  const [activeTimer, setActiveTimer] = useState<NodeJS.Timeout | undefined>(
    undefined
  );
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false);

  const open = () => setCartDropdownOpen(true);
  const close = () => setCartDropdownOpen(false);

  const totalItems =
    cartState?.lines?.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0) || 0;

  const itemRef = useRef<number>(totalItems || 0);

  const timedOpen = () => {
    open();

    const timer = setTimeout(close, 5000);

    setActiveTimer(timer);
  };

  const openAndCancel = () => {
    if (activeTimer) {
      clearTimeout(activeTimer);
    }

    open();
  };

  // Clean up the timer when the component unmounts
  useEffect(() => {
    return () => {
      if (activeTimer) {
        clearTimeout(activeTimer);
      }
    };
  }, [activeTimer]);

  const pathname = usePathname();

  // open cart dropdown when modifying the cart items, but only if we're not on the cart page
  useEffect(() => {
    if (itemRef.current !== totalItems && !pathname.includes("/cart")) {
      timedOpen();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalItems, itemRef.current]);

  return (
    <div
      className="z-50 h-full"
      onMouseEnter={openAndCancel}
      onMouseLeave={close}
    >
      <Popover className="relative h-full">
        <Popover.Button className="h-full">
          <Link className="hover:text-ui-fg-base" href="/cart">
            <span className="relative md:hidden">
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 ? (
                <span className="absolute flex items-center justify-center w-4 h-4 text-xs rounded-full -top-2 -right-2 bg-primary text-primary-foreground">
                  {totalItems}
                </span>
              ) : null}
            </span>
            <span className="hidden md:inline">{`Varukorg (${totalItems})`}</span>
          </Link>
        </Popover.Button>
        <Transition
          show={cartDropdownOpen}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel
            static
            className="hidden small:block absolute top-[calc(100%+1px)] right-0 bg-white border-x border-b border-gray-200 w-[420px] text-ui-fg-base"
          >
            <div className="flex items-center justify-center p-4">
              <h3 className="text-large-semi">Varukorg</h3>
            </div>
            {cartState && cartState.lines?.length ? (
              <>
                <div className="overflow-y-scroll max-h-[402px] px-4 grid grid-cols-1 gap-y-8 no-scrollbar p-px">
                  {cartState.lines.map((item) => (
                    <div
                      className="grid grid-cols-[122px_1fr] gap-x-4"
                      key={item.id}
                    >
                      <Link
                        href={`/products/${item.merchandise.product.handle}`}
                        className="w-24"
                      >
                        <Thumbnail
                          thumbnail={
                            item.merchandise.product.featuredImage?.url
                          }
                          size="square"
                        />
                      </Link>
                      <div className="flex flex-col justify-between flex-1">
                        <div className="flex flex-col flex-1">
                          <div className="flex items-start justify-between">
                            <div className="flex flex-col overflow-ellipsis whitespace-nowrap mr-4 w-[180px]">
                              <h3 className="overflow-hidden text-base-regular text-ellipsis">
                                <Link
                                  href={`/products/${item.merchandise.product.handle}`}
                                >
                                  {item.merchandise.product.title}
                                </Link>
                              </h3>
                              <LineItemOptions item={item} />
                              <span>Antal: {item.quantity}</span>
                            </div>
                            <div className="flex justify-end">
                              <LineItemPrice item={item} />
                            </div>
                          </div>
                        </div>
                        <DeleteButton id={item.id} className="mt-1">
                          Ta bort
                        </DeleteButton>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col p-4 gap-y-4 text-small-regular">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-ui-fg-base">
                      Totalt <span className="font-normal">(inkl. moms)</span>
                    </span>
                    <span className="text-large-semi">
                      {formatAmount({
                        amount: cartState.cost.totalAmount.amount,
                        currencyCode: cartState.cost.totalAmount.currencyCode,
                      })}
                    </span>
                  </div>
                  <Link href="/cart" passHref>
                    <Button className="w-full" size="large">
                      Gå till varukorgen
                    </Button>
                  </Link>
                </div>
              </>
            ) : (
              <div>
                <div className="flex flex-col items-center justify-center py-16 gap-y-4">
                  <div className="flex items-center justify-center w-6 h-6 text-white bg-gray-900 rounded-full text-small-regular">
                    <span>0</span>
                  </div>
                  <span>Din varukorg är tom.</span>
                  <div>
                    <Link href="/store">
                      <>
                        <span className="sr-only">Gå till alla produkter</span>
                        <Button onClick={close}>Utforska produkter</Button>
                      </>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default CartDropdown;
