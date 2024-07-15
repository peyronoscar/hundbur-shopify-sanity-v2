import { Text } from "@medusajs/ui";
import { CarouselItem } from "@/storefront/components/ui/carousel";
import burarImage from "@/public/images/product_types/burar.png";
import gallerImage from "@/public/images/product_types/galler.png";
import grindImage from "@/public/images/product_types/grind.png";
import tillbehorImage from "@/public/images/product_types/tillbehor.png";
import balteImage from "@/public/images/product_types/balte.png";
import Image from "next/image";
import Link from "next/link";

const productTypeImages = {
  Hundburar: burarImage,
  Tillbehör: tillbehorImage,
  Hundsäkerhetsbälte: balteImage,
  Skyddsgaller: gallerImage,
  Hundgrindar: grindImage,
};

export default function ProductRail({ type }: { type: string | null }) {
  if (!type) return null;

  const image = productTypeImages[type as keyof typeof productTypeImages];

  return (
    <CarouselItem className="basis-[180px] md:basis-1/2 lg:basis-1/4 xl:basis-1/5">
      <Link href={`/store/?type=${encodeURIComponent(type)}`}>
        <div className="flex flex-col border rounded-md">
          <div className="relative border-b aspect-square">
            {image ? (
              <Image src={image} alt={type} fill className="object-cover" />
            ) : null}
          </div>
          <div className="p-4">
            <Text className="font-medium md:txt-xlarge text-sm">{type}</Text>
          </div>
        </div>
      </Link>
    </CarouselItem>
  );
}
