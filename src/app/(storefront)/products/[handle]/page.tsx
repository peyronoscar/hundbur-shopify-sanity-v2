import { getProduct, getProducts } from "@/sanity/lib";
import ProductTemplate from "@/storefront/components/products/templates";
import { getProduct as getShopifyProduct } from "@/storefront/lib/shopify";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { handle: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = params;

  const product = await getProduct(handle);

  if (!product || !product.store) {
    notFound();
  }

  const { title, descriptionHtml, previewImageUrl } = product.store;

  return {
    title: title,
    description: descriptionHtml,
    openGraph: {
      title: title,
      description: descriptionHtml,
      images: previewImageUrl ? [previewImageUrl] : [],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const [product, shopifyProduct] = await Promise.all([
    getProduct(params.handle),
    getShopifyProduct(params.handle),
  ]);

  if (!product || !shopifyProduct) {
    notFound();
  }

  return <ProductTemplate product={product} shopifyProduct={shopifyProduct} />;
}
