import Spinner from "@/storefront/components/common/icons/spinner";
import React from "react";

export default function Loading() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Spinner size={24} />
    </div>
  );
}
