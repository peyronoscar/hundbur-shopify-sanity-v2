import { CategorySelector } from "@/storefront/components/common/components/category-selector";
import { Suspense } from "react";
import image from "@/public/images/home/hero.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[420px] md:h-[500px] w-full relative bg-ui-bg-subtle">
      <div className="absolute h-full inset-0">
        <Image
          src={image}
          alt="Hero image"
          className="object-cover md:object-[100%_75%]"
          fill
        />
      </div>
      <div className="content-container px-8 max-w-md md:max-w-xl relative z-10 h-full flex flex-col pt-8 md:justify-center md:pt-0 md:pb-10 lg:w-1/2 xl:ml-[10%] lg:max-w-none lg:items-center">
        <div className="flex flex-col items-center gap-4 p-6 text-center rounded-md bg-muted/95 md:gap-5 lg:px-10">
          <h1 className="text-2xl leading-snug sm:text-3xl md:text-4xl xl:text-[2.85rem] md:font-semibold xl:leading-tight">
            Vilka produkter passar
            <br />
            till min bil?
          </h1>
          <Suspense>
            <CategorySelector />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Hero;
