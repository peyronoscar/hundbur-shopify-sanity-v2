import { getProductTypes } from "@/sanity/lib";
import FilterRadioGroup from "@/storefront/components/common/components/filter-radio-group";

type TypeFilterProps = {
  typeId?: string;
};

const TypeFilter = async ({ typeId }: TypeFilterProps) => {
  const product_types = await getProductTypes();

  const items = product_types.map((type) => ({
    value: encodeURIComponent(type),
    label: type,
  }));

  return (
    <FilterRadioGroup
      title="Produkttyp"
      items={items}
      value={typeId}
      param="type"
    />
  );
};

export default TypeFilter;
