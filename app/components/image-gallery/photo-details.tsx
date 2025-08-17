import {
  Aperture,
  Calendar,
  Camera,
  Focus,
  MapPin,
  ScanEye,
  Sun,
} from "lucide-react";

export const PhotoDetails = ({ photo }: { photo: UnsplashPhotoDetails }) => {
  const details = [
    {
      label: "Tirado em",
      value: new Date(photo.created_at).toLocaleDateString("pt-BR"),
      icon: Calendar,
    },
    {
      label: "Câmera",
      value:
        photo.exif?.make && photo.exif?.model
          ? `${photo.exif.make} ${photo.exif.model}`
          : "Desconhecido",
      icon: Camera,
    },
    {
      label: "Distância focal",
      value: photo.exif?.focal_length || "Desconhecido",
      icon: Focus,
    },
    {
      label: "Abertura",
      value: photo.exif?.aperture || "Desconhecido",
      icon: Aperture,
    },
    {
      label: "ISO",
      value: photo.exif?.iso?.toString() || "Desconhecido",
      icon: ScanEye,
    },
    {
      label: "Exposição",
      value: photo.exif?.exposure_time || "Desconhecido",
      icon: Sun,
    },
  ];

  console.log(photo.location);

  return (
    <div className="space-y-3">
      {details.map((detail, index) => (
        <div key={index} className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            {detail.icon && (
              <detail.icon className="h-4 w-4 text-muted-foreground" />
            )}
            <span className="text-sm font-medium">{detail.label}</span>
          </div>
          <span className="text-sm text-muted-foreground">{detail.value}</span>
        </div>
      ))}
      {photo.location?.city || photo.location?.country ? (
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Localização</span>
          </div>
          <span className="text-sm text-muted-foreground">
            {photo.location?.city && photo.location?.city + ", "}
            {photo.location?.country}
          </span>
        </div>
      ) : null}
    </div>
  );
};
