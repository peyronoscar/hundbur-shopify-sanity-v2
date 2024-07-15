import { Metadata } from "next";
import { notFound } from "next/navigation";

import CategoryTemplate from "@/storefront/components/categories/templates";
import { SortOptions } from "@/storefront/components/store/components/refinement-list/sort-products";
import { getCategoriesByPath } from "@/sanity/lib";

export const dynamic = "force-dynamic";

type Props = {
  params: { category: string[] };
  searchParams: {
    order?: SortOptions;
    page?: string;
    vendor?: string;
    type?: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const categories = await getCategoriesByPath({
      slugs: params.category,
    });

    if (!categories) {
      notFound();
    }

    const title = categories.map((category) => category.title).join(" | ");

    const description = `${title} kategori.`;

    return {
      title,
      description,
      alternates: {
        canonical: `${params.category.join("/")}`,
      },
    };
  } catch (error) {
    notFound();
  }
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { order, page, vendor, type } = searchParams;

  const categories = await getCategoriesByPath({
    slugs: params.category,
  });

  if (!categories) {
    notFound();
  }

  return (
    <CategoryTemplate
      categories={categories}
      order={order}
      page={page}
      categoryHandle={params.category}
      vendorId={vendor}
      typeId={type}
    />
  );
}
