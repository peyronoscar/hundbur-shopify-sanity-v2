"use client";

import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/storefront/components/ui/sheet";
import { useParams, usePathname } from "next/navigation";
import { Button } from "@/storefront/components/ui/button";
import { Plus } from "lucide-react";

export default function RefinementSheet({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const params = useParams();

  useEffect(() => {
    if (open) setOpen(false);
  }, [pathname, params]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="outline" className="gap-1">
          <Plus className="w-4" />
          <span>Filtrera</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filtrera</SheetTitle>
        </SheetHeader>
        <div>{children}</div>
      </SheetContent>
    </Sheet>
  );
}
