import { Metadata } from "next";

import { SortOptions } from "@/storefront/components/store/components/refinement-list/sort-products";
import StoreTemplate from "@/storefront/components/store/templates";

export const metadata: Metadata = {
  title: "Butik",
  description: "Utforska vårt sortiment av produkter.",
};

type Params = {
  searchParams: {
    order?: SortOptions;
    page?: string;
    vendor?: string;
    category?: string;
    type?: string;
  };
};

export default async function StorePage({ searchParams }: Params) {
  const { order, page, vendor, category, type } = searchParams;

  return (
    <StoreTemplate
      order={order}
      page={page}
      vendorId={vendor}
      categoryId={category}
      typeId={type}
    />
  );
}
