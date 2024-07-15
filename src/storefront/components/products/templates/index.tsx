import React, { Suspense } from "react";
import ImageGallery from "@/storefront/components/products/components/image-gallery";
import ProductActions from "@/storefront/components/products/components/product-actions";
import RelatedProducts from "@/storefront/components/products/components/related-products";
import ProductInfo from "@/storefront/components/products/templates/product-info";
import SkeletonRelatedProducts from "@/storefront/components/skeletons/templates/skeleton-related-products";
import { notFound } from "next/navigation";
import CategoryInfo from "./category-info";
import { Product, ProductByHandleQueryResult } from "@/sanity.types";
import { Product as ShopifyProduct } from "@/storefront/lib/shopify/types";

type ProductTemplateProps = {
  product: ProductByHandleQueryResult;
  shopifyProduct: ShopifyProduct;
  categoryHandle?: string[];
};

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  shopifyProduct,
  categoryHandle,
}) => {
  if (!product || !product.store?.gid) {
    return notFound();
  }

  return (
    <>
      <div className="relative flex flex-col py-6 content-container small:flex-row small:items-start">
        <div className="flex flex-col order-3  small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-6 small:order-1">
          <ProductInfo product={product} categoryHandle={categoryHandle} />
        </div>
        <div className="relative block w-full order-1 small:order-2">
          <ImageGallery images={shopifyProduct?.images || []} />
        </div>
        <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-12 order-2 small:order-3">
          <ProductActions product={product} shopifyProduct={shopifyProduct} />
        </div>
      </div>
      {product.categoryNotes && product.categoryNotes.length > 0 ? (
        <div className="my-16 content-container small:my-32">
          <CategoryInfo product={product} categoryHandle={categoryHandle} />
        </div>
      ) : null}
      {categoryHandle ? (
        <div className="my-16 content-container small:my-32">
          <Suspense fallback={<SkeletonRelatedProducts />}>
            <RelatedProducts
              product={product}
              categoryHandle={categoryHandle}
            />
          </Suspense>
        </div>
      ) : null}
    </>
  );
};

export default ProductTemplate;
