import { Suspense } from "react";

import SkeletonProductGrid from "@/storefront/components/skeletons/templates/skeleton-product-grid";
import RefinementList from "@/storefront/components/store/components/refinement-list";
import { SortOptions } from "@/storefront/components/store/components/refinement-list/sort-products";

import PaginatedProducts from "./paginated-products";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/storefront/components/ui/breadcrumb";
import { CategorySelector } from "../../common/components/category-selector";
import { constructSuspensKey } from "@/storefront/lib/utils";

const StoreTemplate = async ({
  order,
  page,
  vendorId,
  categoryId,
  typeId,
}: {
  order?: SortOptions;
  page?: string;
  vendorId?: string;
  categoryId?: string;
  typeId?: string;
}) => {
  const pageNumber = page ? parseInt(page) : 1;
  const keyString = constructSuspensKey({
    categoryId,
    vendorId,
    order,
    page,
    typeId,
  });

  return (
    <div className="flex flex-col py-6 small:flex-row small:items-start content-container">
      <RefinementList
        order={order || "created_at"}
        vendorId={vendorId}
        categoryId={categoryId}
        typeId={typeId}
      />
      <div className="w-full">
        <div className="mb-8 space-y-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>
                  <h1 className="text-xl md:text-2xl-semi">Alla produkter</h1>
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Suspense key={"category--" + keyString}>
            <CategorySelector />
          </Suspense>
          <RefinementList
            order={order || "created_at"}
            vendorId={vendorId}
            categoryId={categoryId}
            typeId={typeId}
            mobile={true}
          />
        </div>
        <Suspense
          fallback={<SkeletonProductGrid />}
          key={"products--" + keyString}
        >
          <PaginatedProducts
            order={order || "created_at"}
            categoryId={categoryId}
            vendorId={vendorId}
            typeId={typeId}
            page={pageNumber}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default StoreTemplate;
