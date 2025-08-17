import { Download, Heart } from "lucide-react";

export const PhotoStats = ({ photo }: { photo: UnsplashPhotoDetails }) => (
  <div className="grid grid-cols-2 gap-4">
    <div className="flex items-center gap-2">
      <Heart className="h-4 w-4 text-red-500" />
      <div>
        <p className="font-semibold">{photo.likes}</p>
        <p className="text-xs text-muted-foreground">Curtidas</p>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <Download className="h-4 w-4 text-blue-500" />
      <div>
        <p className="font-semibold">{photo.downloads}</p>
        <p className="text-xs text-muted-foreground">Downloads</p>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-lg font-mono">{photo.width}</span>
      <span className="text-muted-foreground">×</span>
      <span className="text-lg font-mono">{photo.height}</span>
      <div className="ml-2">
        <p className="text-xs text-muted-foreground">Dimensão</p>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <div
        className="w-4 h-4 rounded border"
        style={{ backgroundColor: photo.color }}
      />
      <div>
        <p className="font-mono text-sm">{photo.color}</p>
        <p className="text-xs text-muted-foreground">Cor Principal</p>
      </div>
    </div>
  </div>
);
