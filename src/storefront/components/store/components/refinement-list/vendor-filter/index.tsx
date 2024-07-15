import { getProductVendors } from "@/sanity/lib";
import FilterRadioGroup from "@/storefront/components/common/components/filter-radio-group";

type VendorFilterProps = {
  vendorId?: string;
};

const VendorFilter = async ({ vendorId }: VendorFilterProps) => {
  const product_vendors = await getProductVendors();

  const items = product_vendors.map((vendor) => ({
    value: encodeURIComponent(vendor),
    label: vendor,
  }));

  return (
    <FilterRadioGroup
      title="Tillverkare"
      items={items}
      value={vendorId}
      param="vendor"
    />
  );
};

export default VendorFilter;
