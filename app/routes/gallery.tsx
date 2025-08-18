import type { Route } from "./+types/home";
import { ImageGallery } from "~/pages/image-gallery/image-gallery";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cote fácil - Image Gallery" },
    {
      name: "description",
      content:
        "Encontre e aprecie imagens incríveis com nossa galeria de fotos.",
    },
  ];
}

export default function Gallery() {
  return <ImageGallery />;
}
