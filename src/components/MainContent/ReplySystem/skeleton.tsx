import { Skeleton } from "@/components/ui/skeleton";

const ReplySystemSkeleton = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="p-2.5 border-b border-border flex items-center justify-between">
        <div className="flex gap-2">
          <Skeleton className=" w-9 h-9" />
          <Skeleton className=" w-9 h-9" />
          <Skeleton className=" w-9 h-9" />
        </div>
        <div className="flex gap-2">
          <Skeleton className=" w-9 h-9" />
          <Skeleton className=" w-9 h-9" />
          <Skeleton className=" w-9 h-9" />
        </div>
      </div>
      <div className="flex flex-col flex-grow">
        <div className="h-auto border-b border-border flex items-start justify-between p-4">
          <div className="flex gap-3 items-start">
            <Skeleton className="w-12 h-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="w-52 h-4" />
              <Skeleton className="w-44 h-3" />
              <Skeleton className="w-40 h-3" />
            </div>
          </div>
          <div className="flex gap-2 text-sm text-muted-foreground flex-wrap">
            <Skeleton className=" w-12 h-6" />
            <Skeleton className=" w-12 h-6" />
          </div>
        </div>
        <div className="flex-grow mx-4 my-5 space-y-3">
          <Skeleton className="w-full h-5" />
          <Skeleton className="w-full h-5" />
          <Skeleton className="w-full h-5" />
          <Skeleton className="w-3/4 h-5" />
        </div>
      </div>
    </div>
  );
};

export default ReplySystemSkeleton;
