"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/storefront/components/ui/select";
import { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { FilterItem } from ".";

type FilterSelectGroupProps = {
  items: FilterItem[];
  depth: number;
  breadcrumb: string[];
  handle?: string;
  path?: string[];
  parentLabel?: string;
};

export const FilterSelect = ({
  items,
  depth,
  breadcrumb,
  handle,
  path,
  parentLabel,
}: FilterSelectGroupProps) => {
  const breadcrumbHandle = breadcrumb[depth];
  const isBreadcrumb = !!items.find((item) => item.value === breadcrumbHandle);
  const [selected, setSelected] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useParams();
  const selectedItem = items.find((item) => item.value === selected);
  const hasChildren =
    selectedItem?.children && selectedItem.children.length > 0;
  const searchParams = useSearchParams();

  let newPath: string[] = [];

  if (path) newPath.push(...path);
  if (selected) newPath.push(selected);

  let title = "";

  switch (depth) {
    case 0:
      title = "Välj ett bilmärke";
      break;
    case 1:
      title = "Välj en bilmodell";
      break;
    case 2:
      title = "Välj en årsmodell";
      break;
  }

  useEffect(() => {
    setSelected(isBreadcrumb ? breadcrumbHandle : undefined);
  }, [items, breadcrumbHandle, isBreadcrumb]);

  return (
    <>
      <Select
        onValueChange={(value) => {
          const category = items.find((item) => item.value === value);
          const hasChildren =
            category?.children && category.children.length > 0;

          if (selected) {
            newPath.pop();
          }

          newPath.push(value);

          if (!hasChildren) {
            setLoading(true);

            if (handle) {
              router.push(
                `/products/${newPath.join("/")}/${handle}?${searchParams.toString()}`
              );
            } else {
              router.push(
                `/categories/${newPath.join("/")}?${searchParams.toString()}`
              );
            }
          }

          setSelected(value);
        }}
        value={selected}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={title} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item, i) => (
            <SelectItem key={item.value + i} value={item.value}>
              {item.label.replace(parentLabel ?? "", "").trim()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {hasChildren ? (
        <FilterSelect
          items={selectedItem.children as FilterItem[]}
          depth={depth + 1}
          breadcrumb={breadcrumb}
          key={selected ? `${selected}-${depth}` : Math.random()}
          handle={handle}
          path={newPath}
          parentLabel={selectedItem.label}
        />
      ) : null}
      {loading ? <Loader2 className="animate-spin size-8" /> : null}
    </>
  );
};
