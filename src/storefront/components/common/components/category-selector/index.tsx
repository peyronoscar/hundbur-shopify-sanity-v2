import { getCategoryTree } from "@/sanity/lib";
import { FilterSelect } from "./fitler-select";
import { cn } from "@/storefront/lib/utils";
import { CategoryWithChildrenAndProductCount } from "@/sanity/types/category";
import { buildIdBreadcrumb } from "@/storefront/components/store/components/refinement-list/category-filter";

export interface FilterItem {
  value: string;
  label: string;
  children?: FilterItem[] | null;
}

function transformCategories(
  categories: CategoryWithChildrenAndProductCount[] | undefined
): FilterItem[] | null {
  if (!categories) return null;

  return categories
    .filter((category) => category.slug?.current)
    .map((category) => ({
      value: category.slug?.current as string,
      label: category.title as string,
      children: transformCategories(category.category_children),
    }));
}

export const CategorySelector = async ({
  categoryHandle,
  handle,
  className,
}: {
  categoryHandle?: string;
  handle?: string;
  className?: string;
}) => {
  const categories = await getCategoryTree();

  const items = categories.map((category) => ({
    value: category.slug?.current as string,
    label: category.title as string,
    children: transformCategories(category.category_children),
  }));

  const breadcrumb = buildIdBreadcrumb(categories, categoryHandle);

  return (
    <div
      className={cn(
        "flex flex-wrap gap-2 xl:items-center flex-col xl:flex-row",
        className
      )}
    >
      <FilterSelect
        items={items}
        depth={0}
        breadcrumb={breadcrumb}
        handle={handle}
      />
    </div>
  );
};
