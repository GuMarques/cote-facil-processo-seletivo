import { ImageDetails } from "~/image-details";
import type { Route } from "./+types/home";

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

export default function GalleryPhoto() {
  return <ImageDetails />;
}
