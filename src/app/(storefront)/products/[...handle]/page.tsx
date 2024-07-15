import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct } from "@/sanity/lib";
import { getProduct as getShopifyProduct } from "@/storefront/lib/shopify";
import ProductTemplate from "@/storefront/components/products/templates";

export const dynamicParams = false;

type Props = {
  params: { handle: string[] };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = params;

  const productHandle = handle[handle.length - 1];

  const product = await getProduct(productHandle);

  if (!product || !product.store) {
    notFound();
  }

  return {
    title: product.store.title,
    description: product.store.title,
    openGraph: {
      title: product.store.title,
      description: product.store.title,
      images: product.store.previewImageUrl
        ? [product.store.previewImageUrl]
        : [],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const categoryHandle = params.handle.slice(0, -1);
  const productHandle = params.handle[params.handle.length - 1];

  const [product, shopifyProduct] = await Promise.all([
    getProduct(productHandle),
    getShopifyProduct(productHandle),
  ]);

  if (!product || !shopifyProduct) {
    notFound();
  }

  return (
    <ProductTemplate
      product={product}
      shopifyProduct={shopifyProduct}
      categoryHandle={categoryHandle}
    />
  );
}
