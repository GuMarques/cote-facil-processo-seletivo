import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@uidotdev/usehooks";
import { Separator } from "~/components/ui/separator";
import { Unsplash } from "~/services/unsplash-services";
import { Footer } from "~/components/image-gallery/footer";
import { ImageCard } from "~/components/image-gallery/image-card";
import { HomeHeader } from "~/components/image-gallery/home-header";
import { LoadingCard } from "~/components/image-gallery/loading-card";
import { EmptyWarning } from "~/components/image-gallery/empty-warning";
import { useSearchParams } from "react-router";
import { HomePagination } from "~/components/image-gallery/home-pagination";

export const ImageGallery = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState<string>(searchParams.get("query") || "");
  const [page, setPage] = useState(
    searchParams.get("page") ? Number(searchParams.get("page")) : 1
  );

  const debouncedQuery = useDebounce(searchParams.get("query") || "", 300);
  const debouncedPage = Number(useDebounce(searchParams.get("page") || 0, 300));

  const { data, isLoading } = useQuery({
    queryKey: ["photos", debouncedPage, debouncedQuery],
    queryFn: async () =>
      await Unsplash.getPhotos(debouncedPage, debouncedQuery),
  });

  useEffect(() => {
    if (query) {
      setSearchParams({ query: query, page: String(page) });
    } else {
      setSearchParams({ page: String(page) });
    }
  }, [query, page]);

  return (
    <>
      <div className="fixed inset-0 bg-red-100 -z-10">
        <div className="relative h-full w-full bg-white">
          <div className="absolute h-full w-full bg-[radial-gradient(#c6c8cc_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
      </div>
      <div className="min-h-screen py-8 bg-transparent relative container mx-auto">
        <HomeHeader query={query} setQuery={setQuery} />
        <Separator className="my-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-4 mx-auto justify-center [grid-auto-rows:min-content] w-fit px-4">
          {isLoading ? (
            Array.from({ length: 24 }).map((_, index) => (
              <LoadingCard key={index} />
            ))
          ) : data === undefined || data?.length === 0 ? (
            <EmptyWarning />
          ) : (
            data.map((photo) => <ImageCard key={photo.id} photo={photo} />)
          )}
        </div>

        {data && data.length > 0 && (
          <div className="mt-8 px-4">
            <HomePagination page={page} setPage={setPage} />
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};
