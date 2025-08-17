import { Card, CardContent, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export const ImageSkeleton = () => (
  <div className="space-y-4">
    <Skeleton className="h-[600px] w-full rounded" />
    <div className="flex gap-2">
      <Skeleton className="h-10 flex-1" />
      <Skeleton className="h-10 w-32" />
    </div>
  </div>
);

export const InfoSkeleton = () => (
  <Card>
    <CardHeader>
      <Skeleton className="h-6 w-32" />
    </CardHeader>
    <CardContent className="space-y-6">
      <div className="flex items-center gap-3">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-32" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-3 w-12" />
          </div>
        ))}
      </div>
      <div className="space-y-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex justify-between">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-24" />
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);
