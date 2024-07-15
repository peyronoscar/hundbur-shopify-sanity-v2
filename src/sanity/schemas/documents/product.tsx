import { TagIcon } from "@sanity/icons";
import pluralize from "pluralize-esm";
import ProductHiddenInput from "@/sanity/components/inputs/product-hidden";
import ShopifyDocumentStatus from "@/sanity/components/media/shopify-document-status";
import { defineField, defineType } from "sanity";
import { getPriceRange } from "@/sanity/utils/getPriceRange";
import { GROUPS } from "@/sanity/constants";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: TagIcon,
  groups: GROUPS,
  fields: [
    defineField({
      name: "hidden",
      type: "string",
      components: {
        field: ProductHiddenInput,
      },
      group: GROUPS.map((group) => group.name),
      hidden: ({ parent }) => {
        const isActive = parent?.store?.status === "active";
        const isDeleted = parent?.store?.isDeleted;
        return !parent?.store || (isActive && !isDeleted);
      },
    }),
    defineField({
      name: "titleProxy",
      title: "Title",
      type: "proxyString",
      options: { field: "store.title" },
    }),
    defineField({
      name: "slugProxy",
      title: "Slug",
      type: "proxyString",
      options: { field: "store.slug.current" },
    }),
    defineField({
      name: "colorTheme",
      type: "reference",
      to: [{ type: "colorTheme" }],
      group: "editorial",
    }),
    defineField({
      name: "body",
      type: "portableText",
      group: "editorial",
    }),
    defineField({
      name: "store",
      type: "shopifyProduct",
      description: "Product data from Shopify (read-only)",
      group: "shopifySync",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
    defineField({
      name: "categoryPath",
      title: "Path",
      type: "array",
      hidden: true,
      of: [{ type: "reference", to: [{ type: "category" }] }],
      description:
        "This array contains references to all parent categories, maintaining order from the root.",
      readOnly: true,
    }),
    defineField({
      name: "categoryNotes",
      title: "Category Notes",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "category",
              type: "reference",
              to: [{ type: "category" }],
            },
            { name: "value", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "sales",
      title: "Sales",
      type: "number",
      group: "editorial",
    }),
    defineField({
      name: "weight",
      title: "Weight",
      type: "number",
      group: "editorial",
    }),
    defineField({
      name: "height",
      title: "Height",
      type: "number",
      group: "editorial",
    }),
    defineField({
      name: "width",
      title: "Width",
      type: "number",
      group: "editorial",
    }),
    defineField({
      name: "length",
      title: "Length",
      type: "number",
      group: "editorial",
    }),
  ],
  orderings: [
    {
      name: "titleAsc",
      title: "Title (A-Z)",
      by: [{ field: "store.title", direction: "asc" }],
    },
    {
      name: "titleDesc",
      title: "Title (Z-A)",
      by: [{ field: "store.title", direction: "desc" }],
    },
    {
      name: "priceDesc",
      title: "Price (Highest first)",
      by: [{ field: "store.priceRange.minVariantPrice", direction: "desc" }],
    },
    {
      name: "priceAsc",
      title: "Price (Lowest first)",
      by: [{ field: "store.priceRange.minVariantPrice", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      isDeleted: "store.isDeleted",
      options: "store.options",
      previewImageUrl: "store.previewImageUrl",
      priceRange: "store.priceRange",
      status: "store.status",
      title: "store.title",
      variants: "store.variants",
    },
    prepare(selection) {
      const {
        isDeleted,
        options,
        previewImageUrl,
        priceRange,
        status,
        title,
        variants,
      } = selection;

      const optionCount = options?.length;
      const variantCount = variants?.length;

      let description = [
        variantCount ? pluralize("variant", variantCount, true) : "No variants",
        optionCount ? pluralize("option", optionCount, true) : "No options",
      ];

      let subtitle = getPriceRange(priceRange);
      if (status !== "active") {
        subtitle = "(Unavailable in Shopify)";
      }
      if (isDeleted) {
        subtitle = "(Deleted from Shopify)";
      }

      return {
        description: description.join(" / "),
        subtitle,
        title,
        media: (
          <ShopifyDocumentStatus
            isActive={status === "active"}
            isDeleted={isDeleted}
            type="product"
            url={previewImageUrl}
            title={title}
          />
        ),
      };
    },
  },
});
