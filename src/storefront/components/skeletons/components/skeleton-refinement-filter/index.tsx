import repeat from "@/storefront/lib/util/repeat";

const listitems = [
  <li key="1">
    <div className="w-32 h-3 bg-gray-100 rounded-sm"></div>
  </li>,
  <li key="2">
    <div className="w-24 h-3 bg-gray-100 rounded-sm"></div>
  </li>,
  <li key="3">
    <div className="w-16 h-3 bg-gray-100 rounded-sm"></div>
  </li>,
  <li key="4">
    <div className="w-20 h-3 bg-gray-100 rounded-sm"></div>
  </li>,
  <li key="5">
    <div className="h-3 bg-gray-100 rounded-sm w-36"></div>
  </li>,
  <li key="6">
    <div className="w-16 h-3 bg-gray-100 rounded-sm"></div>
  </li>,
];

const SkeletonRefinementFilter = ({ length }: { length: number }) => {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="w-16 h-3 bg-gray-100 rounded-sm"></div>
      <ul className="grid gap-4">
        {repeat(length).map((index) => listitems[index])}
      </ul>
    </div>
  );
};

export default SkeletonRefinementFilter;
