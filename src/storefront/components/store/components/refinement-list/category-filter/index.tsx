import { CategoryWithChildrenAndProductCount } from "@/sanity/types/category";
import FilterRadioGroup from "@/storefront/components/common/components/filter-radio-group";

export function buildIdBreadcrumb(
  categories?: CategoryWithChildrenAndProductCount[],
  targetHandle?: string,
  path: string[] = []
): string[] {
  if (!categories) return [];
  if (!targetHandle) return [];

  for (const category of categories) {
    const currentPath = [...path, category.slug?.current as string];

    if (category.slug?.current === targetHandle) {
      return currentPath;
    }

    const childPath = buildIdBreadcrumb(
      category.category_children,
      targetHandle,
      currentPath
    );

    if (childPath.length > 0) {
      return childPath;
    }
  }

  return [];
}

// const CategoryFilter = async ({ categoryId }: CategoryFilterProps) => {
//   const product_categories = await listCategories();

//   const items: TransformedCategory[] = product_categories.map((category) => ({
//     value: category.handle,
//     label: category.name,
//     children: transformCategories(category.category_children),
//   }));

//   return (
//     <FilterRadioGroup
//       title="Kategori"
//       items={items}
//       value={categoryId}
//       param="category"
//     />
//   );
// };

// export default CategoryFilter;
