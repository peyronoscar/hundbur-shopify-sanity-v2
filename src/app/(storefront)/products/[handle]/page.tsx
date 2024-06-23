import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HIDDEN_PRODUCT_TAG } from "@/storefront/lib/constants";
import { getProduct } from "@/storefront/lib/shopify";
import { ProductMain } from "@/storefront/components/product";
import { getProduct as getSanityProduct } from "@/sanity/lib";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/storefront/components/ui/collapsible";

export async function generateMetadata({
  params,
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
      },
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt,
            },
          ],
        }
      : null,
  };
}

export default async function ProductPage({
  params,
}: {
  params: { handle: string };
}) {
  const product = await getProduct(params.handle);
  const sanityProduct = await getSanityProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      "@type": "AggregateOffer",
      availability: product.availableForSale
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />
      <ProductMain product={product} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sanityProduct?.categoryNotes?.map((note, i) => {
          if (!note.category) return null;

          return (
            <Collapsible key={i}>
              <CollapsibleTrigger>{note.category.title}</CollapsibleTrigger>
              <CollapsibleContent>{note.value}</CollapsibleContent>
            </Collapsible>
          );
        })}
      </div>
    </>
  );
}
