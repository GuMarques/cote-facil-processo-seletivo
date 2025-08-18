import { ArrowLeft, ChevronLeft } from "lucide-react";
import { useParams, Link, useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Unsplash } from "~/services/unsplash-services";
import { PhotoStats } from "~/components/image-gallery/photo-stats";
import { CreatorInfo } from "~/components/image-gallery/creator-card";
import { PhotoDetails } from "~/components/image-gallery/photo-details";
import { DownloadSection } from "~/components/image-gallery/download-card";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  InfoSkeleton,
  ImageSkeleton,
} from "~/components/image-gallery/loading-details";

export const ImageDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: photo, isLoading } = useQuery({
    queryKey: ["photo", id],
    queryFn: async () => await Unsplash.getPhoto(id as string),
  });

  return (
    <>
      <div className="fixed inset-0 bg-red-100 -z-10">
        <div className="relative h-full w-full bg-white">
          <div className="absolute h-full w-full bg-[radial-gradient(#c6c8cc_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
      </div>

      <div className="min-h-screen bg-transparent relative">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <div
              role="link"
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-600 transition-colors mb-6 cursor-pointer"
            >
              <ChevronLeft size={14} />
              Voltar
            </div>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ImageSkeleton />
              <InfoSkeleton />
            </div>
          ) : photo ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 gap-y-4">
              <div className="space-y-4">
                <img
                  src={photo.urls.regular}
                  alt={photo.description || "Unsplash photo"}
                  className="w-full h-auto rounded shadow-lg object-cover max-h-[80vh]"
                  style={{ backgroundColor: photo.color }}
                />
                <CreatorInfo user={photo.user} />
                <DownloadSection photo={photo} />
              </div>
              <div>
                <Card className="rounded">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Detalhes da Foto
                      {photo.description && (
                        <span className="text-sm font-normal text-muted-foreground max-w-xs truncate">
                          {photo.description}
                        </span>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <PhotoStats photo={photo} />
                    <PhotoDetails photo={photo} />
                    {photo.tags && photo.tags.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-semibold">Tags</h4>
                        <div className="flex flex-wrap gap-1">
                          {photo.tags.slice(0, 10).map((tag, index) => (
                            <Link
                              key={index}
                              className="px-2 py-1 bg-muted rounded text-xs cursor-pointer hover:bg-blue-400 transition-colors"
                              to={{
                                pathname: "/gallery",
                                search: `?query=${tag.title}&page=1`,
                              }}
                            >
                              {tag.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-muted-foreground">
                Photo not found
              </h2>
              <p className="text-muted-foreground mt-2">
                The photo you're looking for doesn't exist.
              </p>
              <Button asChild className="mt-4">
                <Link to="/">Back to Gallery</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
