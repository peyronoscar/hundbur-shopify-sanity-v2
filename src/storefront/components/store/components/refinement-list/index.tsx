import SortProducts, { SortOptions } from "./sort-products";
import { Suspense } from "react";
import VendorFilter from "./vendor-filter";
import TypeFilter from "./type-filter";
import SkeletonRefinementFilter from "@/storefront/components/skeletons/components/skeleton-refinement-filter";
import RefinementSheet from "./sheet";
import { constructSuspensKey } from "@/storefront/lib/utils";

type RefinementListProps = {
  order: SortOptions;
  search?: boolean;
  vendorId?: string;
  categoryId?: string;
  typeId?: string;
  mobile?: boolean;
};

const RefinementList = async ({
  order,
  vendorId,
  categoryId,
  typeId,
  mobile,
}: RefinementListProps) => {
  const keyString = constructSuspensKey({
    categoryId,
    vendorId,
    order,
    typeId,
  });

  if (mobile) {
    return (
      <RefinementSheet>
        <div className="flex flex-col gap-12 py-4 mb-8 small:px-0 pl-6 small:min-w-[250px] small:ml-[1.675rem]">
          <List
            order={order}
            vendorId={vendorId}
            typeId={typeId}
            keyString={keyString}
            mobile={mobile}
          />
        </div>
      </RefinementSheet>
    );
  }

  return (
    <div className="flex-col gap-12 py-4 mb-8 small:px-0 pl-6 small:min-w-[250px] small:ml-[1.675rem] hidden lg:flex">
      <List
        order={order}
        vendorId={vendorId}
        typeId={typeId}
        keyString={keyString}
      />
    </div>
  );
};

function List({
  order,
  vendorId,
  typeId,
  keyString,
  mobile,
}: {
  order: SortOptions;
  vendorId?: string;
  typeId?: string;
  keyString: string;
  mobile?: boolean;
}) {
  return (
    <>
      <SortProducts order={order} />
      <Suspense
        fallback={<SkeletonRefinementFilter length={1} />}
        key={`vendor--${mobile ? "sheet" : "no-sheet"}--` + keyString}
      >
        <VendorFilter vendorId={vendorId} />
      </Suspense>
      <Suspense
        fallback={<SkeletonRefinementFilter length={7} />}
        key={`type--${mobile ? "sheet" : "no-sheet"}--` + keyString}
      >
        <TypeFilter typeId={typeId} />
      </Suspense>
    </>
  );
}

export default RefinementList;
