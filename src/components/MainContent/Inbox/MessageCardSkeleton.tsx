import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function MessageCardSkeleton(): React.ReactElement {
  return (
    <div className="rounded-lg bg-background d border border-border shadow-sm p-4 mb-4">
      <div className="flex justify-between">
        <div className=" mb-3">
          <Skeleton className="w-32 h-5 mb-2" />
          <Skeleton className="w-28 h-3" />
        </div>
        <Skeleton className="w-24 h-3" />
      </div>
      <div className="mb-3">
        <Skeleton className="w-full h-4 mb-2" />
        <Skeleton className="w-3/4 h-4" />
      </div>
      <Skeleton className="w-24 h-5" />
    </div>
  );
}

export default MessageCardSkeleton;
