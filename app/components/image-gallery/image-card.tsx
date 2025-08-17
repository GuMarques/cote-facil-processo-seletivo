import { Calendar, Heart } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router";

export const ImageCard = ({ photo }: { photo: UnsplashPhoto }) => {
  return (
    <Card className="rounded w-[400px] max-w-full">
      <CardHeader className="flex items-center">
        <Avatar>
          <AvatarImage
            alt={photo.user.name}
            src={photo.user.profile_image.medium}
          />
        </Avatar>
        <CardTitle>{photo.user.name}</CardTitle>
        {photo.user.location ? (
          <span className="ml-auto text-xs text-gray-500">
            {photo.user.location}
          </span>
        ) : (
          <span className="ml-auto text-xs text-gray-500">Planeta Terra</span>
        )}
      </CardHeader>
      <CardContent>
        <div className="w-full aspect-square rounded bg-gray-200 animate-pulse overflow-hidden">
          <img
            src={photo.urls.small_s3}
            alt={photo.alt_description || "Image from Unsplash"}
            className="w-full h-full object-cover transition-opacity duration-300"
            onLoad={(e) => {
              e.currentTarget.parentElement?.classList.remove("animate-pulse");
              e.currentTarget.parentElement?.classList.remove("bg-gray-200");
            }}
          />
        </div>
        <div className="flex items-center mt-3 justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center text-gray-800">
              <Heart size={14} />
              <span className="ml-1 text-sm">{photo.likes}</span>
            </div>
            <div className="flex items-center text-gray-800">
              <Calendar size={14} />
              <span className="ml-1 text-sm">
                {new Date(photo.created_at).toLocaleDateString("pt-BR")}
              </span>
            </div>
          </div>
          <Button
            asChild
            size={"sm"}
            className="rounded bg-blue-500 hover:bg-blue-600 cursor-pointer"
          >
            <Link to={`/gallery/${photo.id}`}>Detalhes</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
