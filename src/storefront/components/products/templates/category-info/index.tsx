"use client";

import { Heading, Text } from "@medusajs/ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/storefront/components/ui/accordion";
import { ProductWithCategoryNotes } from "@/sanity/types/product";

type ProductInfoProps = {
  product: ProductWithCategoryNotes;
  categoryHandle?: string[];
};

const CategoryInfo = ({ product, categoryHandle }: ProductInfoProps) => {
  const childCategoryHandle = categoryHandle?.[categoryHandle.length - 1];
  const categoryNote = product.categoryNotes?.find(
    (note) => note.category?.slug?.current === childCategoryHandle
  );

  const filterdNotes = categoryNote
    ? [
        categoryNote,
        ...(product.categoryNotes
          ? product.categoryNotes.filter((note) => note !== categoryNote)
          : []),
      ]
    : product.categoryNotes;

  const sortedNotes = filterdNotes?.sort((a, b) => {
    if ((a.category?.title || "") < (b.category?.title || "")) {
      return -1;
    }
    if ((a.category?.title || "") > (b.category?.title || "")) {
      return 1;
    }
    return 0;
  });

  return (
    <div id="category-info">
      <div className="flex flex-col gap-y-4">
        <Heading level="h2" className="text-3xl leading-10 text-ui-fg-base">
          Modellspecifik information
        </Heading>

        <Text className="text-medium text-ui-fg-subtle">
          Endast bilmodeller med specifik information visas här. Hittar du inte
          din modell passar produkten i din bil.
        </Text>

        {sortedNotes ? (
          <Accordion
            type="single"
            collapsible
            className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {sortedNotes.map((note, index) => (
              <AccordionItem value={index.toString()} key={index}>
                <AccordionTrigger className="text-left">
                  {note.category?.title}
                </AccordionTrigger>
                <AccordionContent>{note.value}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : null}
      </div>
    </div>
  );
};

export default CategoryInfo;
