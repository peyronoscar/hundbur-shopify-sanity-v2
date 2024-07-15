import InteractiveLink from "@/storefront/components/common/components/interactive-link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  description: "Något gick fel",
};

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">Sidan hittades inte</h1>
      <p className="text-small-regular text-ui-fg-base">
        Vi kunde inte hitta sidan du letar efter
      </p>
      <InteractiveLink href="/">Gå till säker plats</InteractiveLink>
    </div>
  );
}
