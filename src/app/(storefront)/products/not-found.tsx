import { Metadata } from "next";

import InteractiveLink from "@/storefront/components/common/components/interactive-link";

export const metadata: Metadata = {
  title: "404",
  description: "Något gick fel",
};

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)] text-center">
      <h1 className="text-2xl-semi text-ui-fg-base">Produkten hittades inte</h1>
      <p className="max-w-md text-small-regular text-ui-fg-base">
        Detta kan bero på att produkten inte längre finns i vårt sortiment eller
        att den inte är kompatibel med din bilmodell.
      </p>
      <InteractiveLink href="/store">
        Hitta produkter till din bil
      </InteractiveLink>
    </div>
  );
}
