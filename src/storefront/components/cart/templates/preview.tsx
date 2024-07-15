"use client";

import { Table, clx } from "@medusajs/ui";

import Item from "@/storefront/components/cart/components/item";
import SkeletonLineItem from "@/storefront/components/skeletons/components/skeleton-line-item";
import { CartItem } from "@/storefront/lib/shopify/types";

type ItemsTemplateProps = {
  items?: CartItem[];
};

const ItemsPreviewTemplate = ({ items }: ItemsTemplateProps) => {
  const hasOverflow = items && items.length > 4;

  return (
    <div
      className={clx({
        "pl-[1px] overflow-y-scroll overflow-x-hidden no-scrollbar max-h-[420px]":
          hasOverflow,
      })}
    >
      <Table>
        <Table.Body>
          {items
            ? items.map((item) => {
                return <Item key={item.id} item={item} type="preview" />;
              })
            : Array.from(Array(5).keys()).map((i) => {
                return <SkeletonLineItem key={i} />;
              })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ItemsPreviewTemplate;
