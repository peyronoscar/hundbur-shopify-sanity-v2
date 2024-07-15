"use client";

import { Heading, Text } from "@medusajs/ui";

type ProductInfoProps = {
  product: ProductWithCategoryNotes;
  categoryHandle?: string[];
};

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/storefront/components/ui/accordion";
import { ProductWithCategoryNotes } from "@/sanity/types/product";
import Prose from "@/storefront/components/prose";

const ProductInfo = ({ product, categoryHandle }: ProductInfoProps) => {
  const childCategoryHandle = categoryHandle?.[categoryHandle.length - 1];
  const categoryNote = product.categoryNotes?.find(
    (note) => note.category?.slug?.current === childCategoryHandle
  );

  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4 lg:max-w-[500px] mx-auto">
        <Heading level="h2" className="text-3xl leading-10 text-ui-fg-base">
          {product.store?.title}
        </Heading>

        {categoryNote?.value ? (
          <Accordion
            type="single"
            className="w-full"
            defaultValue={categoryNote.value}
          >
            <AccordionItem value={categoryNote.value}>
              <AccordionTrigger className="text-left">
                {categoryNote.category?.title}
              </AccordionTrigger>
              <AccordionContent>{categoryNote.value}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : null}

        {product.store?.descriptionHtml && (
          <Prose
            html={product.store?.descriptionHtml}
            className="text-medium text-ui-fg-subtle text-left mx-0 text-sm"
          />
        )}

        <div className="space-y-1">
          {product.weight && (
            <Text className="whitespace-pre-wrap text-medium text-ui-fg-subtle">
              <span className="text-foreground font-medium">Vikt: </span>
              {product.weight / 1000}kg
            </Text>
          )}

          {product.height && (
            <Text className="whitespace-pre-wrap text-medium text-ui-fg-subtle">
              <span className="text-foreground font-medium">Höjd: </span>
              {product.height / 10}cm
            </Text>
          )}

          {product.width && (
            <Text className="whitespace-pre-wrap text-medium text-ui-fg-subtle">
              <span className="text-foreground font-medium">Bredd: </span>
              {product.width / 10}cm
            </Text>
          )}

          {product.length && (
            <Text className="whitespace-pre-wrap text-medium text-ui-fg-subtle">
              <span className="text-foreground font-medium">Längd: </span>
              {product.length / 10}cm
            </Text>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
