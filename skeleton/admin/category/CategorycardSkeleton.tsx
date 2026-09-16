import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const CategorycardSkeleton = () => {
  return (
    <div className="relative h-160 rounded-xl border bg-card p-5 shadow-sm flex flex-col">
      {/* Category Image */}
      <div className="flex-1">
        <Skeleton className="h-full w-full rounded-lg" />
      </div>

      {/* Logo */}
      <span className="absolute w-12 h-12 bottom-74 left-10 border-2 flex items-center justify-center rounded-lg overflow-hidden">
        <Skeleton className="h-full w-full rounded-lg" />
      </span>

      <div className="flex-1 flex justify-center flex-col p-3 gap-3">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-8 w-2/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>

        <div className=" border-t flex flex-col gap-2">
          <span className="flex justify-between items-center mt-3">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-6" />
          </span>

          <span className="flex justify-between items-center mt-3">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-6" />
          </span>
        </div>

        <div className="flex justify-between">
          <Skeleton className="h-10 w-24 md:w-32 rounded-md" />
          <Skeleton className="h-10 w-24 md:w-32 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default CategorycardSkeleton;
