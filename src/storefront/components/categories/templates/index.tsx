import { notFound } from "next/navigation";
import { Fragment, Suspense } from "react";

import SkeletonProductGrid from "@/storefront/components/skeletons/templates/skeleton-product-grid";
import RefinementList from "@/storefront/components/store/components/refinement-list";
import { SortOptions } from "@/storefront/components/store/components/refinement-list/sort-products";
import PaginatedProducts from "@/storefront/components/store/templates/paginated-products";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/storefront/components/ui/breadcrumb";
import { constructSuspensKey } from "@/storefront/lib/utils";
import { Category } from "@/sanity.types";
import { CategorySelector } from "../../common/components/category-selector";

export default function CategoryTemplate({
  categories,
  order,
  page,
  categoryHandle,
  vendorId,
  categoryId,
  typeId,
}: {
  categories: Category[];
  order?: SortOptions;
  page?: string;
  categoryHandle: string[];
  vendorId?: string;
  categoryId?: string;
  typeId?: string;
}) {
  const pageNumber = page ? parseInt(page) : 1;

  const category = categories[categories.length - 1];
  const parents = categories.slice(0, categories.length - 1);

  const { slug } = category;

  if (!category) {
    notFound();
  }

  const keyString = constructSuspensKey({
    handle: slug?.current,
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
          <div className="flex flex-row gap-4">
            <Breadcrumb>
              <BreadcrumbList>
                {parents &&
                  parents.map((parent, i) => (
                    <Fragment key={parent._id}>
                      <BreadcrumbItem>
                        <BreadcrumbPage className="text-xl md:text-2xl-semi">
                          {parent.title
                            ?.replace(parents[i - 1]?.title || "", "")
                            .trim()}
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="[&>svg]:size-5" />
                    </Fragment>
                  ))}
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    <h1 className="text-xl md:text-2xl-semi">
                      {category.title
                        ?.replace(parents[parents.length - 1]?.title || "", "")
                        .trim()}
                    </h1>
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <Suspense key={"category--" + keyString}>
            <CategorySelector categoryHandle={category.slug?.current} />
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
            page={pageNumber}
            categoryId={category._id}
            typeId={typeId}
            categoryHandle={categoryHandle}
          />
        </Suspense>
      </div>
    </div>
  );
}
