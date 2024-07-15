import { cn } from "@/storefront/lib/utils";
import Image, { StaticImageData } from "next/image";

export function Featured({
  reverse,
  image,
  title,
  children,
}: {
  reverse?: boolean;
  image: StaticImageData;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "md:min-h-[600px] w-full relative flex flex-col md:flex-row",
        reverse && "md:flex-row-reverse"
      )}
    >
      <div className="relative flex-1 min-h-[300px] md:min-h-0 aspect-square">
        <Image src={image} alt="Hero image" className="object-cover" fill />
      </div>
      <div className="flex flex-col justify-center py-10 rounded-md md:items-center md:text-center content-container md:flex-1">
        <div
          className={cn(
            "flex flex-col items-center justify-center space-y-3",
            !reverse && " md:pl-14",
            reverse && "md:pr-14"
          )}
        >
          <h2 className="text-2xl leading-10 sm:text-3xl">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
}
