"use client";

import FilterRadioGroup from "@/storefront/components/common/components/filter-radio-group";

export type SortOptions =
  | "created_at"
  | "price_asc"
  | "price_desc"
  | "title"
  | "best_selling";

type SortProps = {
  order: SortOptions;
};

const sortOptions: {
  value: SortOptions;
  label: string;
}[] = [
  {
    value: "best_selling",
    label: "Populära",
  },
  {
    value: "created_at",
    label: "Senaste",
  },
  {
    value: "price_asc",
    label: "Pris: Låg -> Hög",
  },
  {
    value: "price_desc",
    label: "Pris: Hög -> Låg",
  },
  {
    value: "title",
    label: "Namn: A -> Ö",
  },
];

const Sort = ({ order }: SortProps) => {
  return (
    <FilterRadioGroup
      title="Sortera"
      param="order"
      items={sortOptions}
      value={order}
    />
  );
};

export default Sort;
