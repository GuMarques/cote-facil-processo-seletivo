import { Download } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

type DownloadResolution = {
  url: string;
  label: string;
  description: string;
};

export const DownloadSection = ({ photo }: { photo: UnsplashPhotoDetails }) => {
  const resolutions: DownloadResolution[] = [];

  if (photo?.urls?.small) {
    resolutions.push({
      label: "Pequeno",
      url: photo.urls.small,
      description: "640px",
    });
  }

  if (photo?.urls?.regular) {
    resolutions.push({
      label: "Normal",
      url: photo.urls.regular,
      description: "1080px",
    });
  }

  if (photo?.urls?.full) {
    resolutions.push({
      label: "Grande",
      url: photo.urls.full,
      description: "2000px",
    });
  }

  if (photo?.urls?.regular) {
    resolutions.push({
      label: "Original",
      url: photo.urls.raw,
      description: "Tamanho original",
    });
  }

  const handleDownload = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <Card className="rounded">
      <CardContent>
        <div className="space-y-3">
          <h4 className="font-semibold">Opções de Download</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {resolutions.map((resolution) => (
              <Button
                variant="outline"
                className="cursor-pointer"
                key={resolution.url}
                onClick={() =>
                  handleDownload(
                    resolution.url,
                    `unsplash-${photo.id}-${resolution.label.toLowerCase()}.jpg`
                  )
                }
              >
                <div className="flex items-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>{resolution.label}</span>
                  <span className="text-xs text-muted-foreground">
                    {resolution.description}
                  </span>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
