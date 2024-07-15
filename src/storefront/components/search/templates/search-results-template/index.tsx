import { Heading, Text } from "@medusajs/ui";

import RefinementList from "@/storefront/components/store/components/refinement-list";
import { SortOptions } from "@/storefront/components/store/components/refinement-list/sort-products";
import PaginatedProducts from "@/storefront/components/store/templates/paginated-products";
import LocalizedClientLink from "@/storefront/components/common/components/localized-client-link";

type SearchResultsTemplateProps = {
  query: string;
  ids: string[];
  order?: SortOptions;
  page?: string;
  type?: string;
  vendor?: string;
};

const SearchResultsTemplate = ({
  query,
  ids,
  order,
  page,
  type,
  vendor,
}: SearchResultsTemplateProps) => {
  const pageNumber = page ? parseInt(page) : 1;

  return (
    <>
      <div className="flex justify-between border-b w-full py-6 px-8 small:px-14 items-center">
        <div className="flex flex-col items-start">
          <Text className="text-muted-foreground">Resultat för:</Text>
          <Heading>
            {query} ({ids.length})
          </Heading>
        </div>
        <LocalizedClientLink
          href="/store"
          className="txt-medium text-ui-fg-subtle hover:text-ui-fg-base"
        >
          Rensa
        </LocalizedClientLink>
      </div>
      <div className="flex flex-col small:flex-row small:items-start p-6">
        {ids.length > 0 ? (
          <>
            <RefinementList
              order={order || "created_at"}
              search
              typeId={type}
              vendorId={vendor}
            />
            <div className="content-container">
              <PaginatedProducts
                productsIds={ids}
                order={order}
                page={pageNumber}
                typeId={type}
                vendorId={vendor}
              />
            </div>
          </>
        ) : (
          <Text className="ml-8 small:ml-14 mt-3">No results.</Text>
        )}
      </div>
    </>
  );
};

export default SearchResultsTemplate;
