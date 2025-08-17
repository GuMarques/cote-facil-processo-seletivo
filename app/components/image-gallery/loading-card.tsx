import { Skeleton } from "../ui/skeleton";
import { Card, CardContent, CardHeader } from "../ui/card";

export const LoadingCard = () => {
  return (
    <Card className="rounded max-w-full w-[400px]">
      <CardHeader className="flex items-center">
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="h-6 w-32 rounded" />
        <Skeleton className="h-4 w-16 rounded ml-auto" />
      </CardHeader>
      <CardContent>
        <Skeleton className="w-full h-auto rounded aspect-square mb-3" />
        <div className="flex items-center gap-3 mt-3">
          <div className="flex items-center text-gray-800">
            <Skeleton className="h-3.5 w-3.5 rounded-full" />
            <Skeleton className="ml-1 h-3 w-12 rounded" />
          </div>
          <div className="flex items-center text-gray-800">
            <Skeleton className="h-3.5 w-3.5 rounded-full" />
            <Skeleton className="ml-1 h-3 w-12 rounded" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
