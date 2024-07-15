import { CategorySelector } from "@/storefront/components/common/components/category-selector";
import { Loader2 } from "lucide-react";
import React, { Suspense } from "react";

export default function ProductCategorySelector({
  handle,
}: {
  handle: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] space-y-4 text-center content-container">
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl">Välj en bildmodell</h1>
        <p>Välj en bilmodell för att komma vidare till produkten</p>
      </div>
      <Suspense fallback={<Loader2 className="w-7 h-7 animate-spin" />}>
        <CategorySelector handle={handle} className="justify-center" />
      </Suspense>
    </div>
  );
}
