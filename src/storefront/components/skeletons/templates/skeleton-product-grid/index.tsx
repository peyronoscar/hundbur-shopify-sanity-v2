import repeat from "@/storefront/lib/util/repeat";
import SkeletonProductPreview from "@/storefront/components/skeletons/components/skeleton-product-preview";

const SkeletonProductGrid = () => {
  return (
    <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8 flex-1">
      {repeat(8).map((index) => (
        <li key={index}>
          <SkeletonProductPreview />
        </li>
      ))}
    </ul>
  );
};

export default SkeletonProductGrid;
