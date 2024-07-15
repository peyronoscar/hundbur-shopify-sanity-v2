import { getProductTypes } from "@/sanity/lib";
import ProductRail from "./product-rail";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/storefront/components/ui/carousel";

export default async function FeaturedProductTypes() {
  const product_types = await getProductTypes();

  return (
    <div className="pt-6 pb-10 content-container lg:container md:pb-24">
      <Carousel>
        <CarouselContent>
          {product_types.map((type, index) => (
            <ProductRail type={type} key={index} />
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 -translate-x-1/2" />
        <CarouselNext className="right-0 translate-x-1/2" />
      </Carousel>
    </div>
  );
}
