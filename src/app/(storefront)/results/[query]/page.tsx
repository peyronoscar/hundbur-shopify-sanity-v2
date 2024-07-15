import { search } from "@/storefront/components/search/actions";
import SearchResultsTemplate from "@/storefront/components/search/templates/search-results-template";
import { SortOptions } from "@/storefront/components/store/components/refinement-list/sort-products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sök",
  description: "Utforska vårt sortiment av produkter.",
};

type Params = {
  params: { query: string };
  searchParams: {
    order?: SortOptions;
    page?: string;
    type?: string;
    vendor?: string;
  };
};

export default async function SearchResults({ params, searchParams }: Params) {
  const { query } = params;
  const { order, page, type, vendor } = searchParams;
  const decodedQuery = decodeURIComponent(query);

  const hits = await search(decodedQuery).then((data) => data);

  const ids = hits
    .map((h) => h.id?.toString())
    .filter((id): id is string => {
      return typeof id === "string";
    });

  return (
    <SearchResultsTemplate
      query={decodedQuery}
      ids={ids}
      order={order}
      page={page}
      type={type}
      vendor={vendor}
    />
  );
}
