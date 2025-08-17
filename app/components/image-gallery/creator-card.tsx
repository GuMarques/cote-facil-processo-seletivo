import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export const CreatorInfo = ({ user }: { user: User }) => (
  <div className="flex items-center gap-3 p-4 bg-white rounded shadow-sm border">
    <Avatar className="h-12 w-12">
      <AvatarImage src={user.profile_image.medium} alt={user.name} />
      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
    </Avatar>
    <div className="flex-1">
      <h3 className="font-semibold">{user.name}</h3>
      <p className="text-sm text-muted-foreground">@{user.username}</p>
      {user.bio && (
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
          {user.bio}
        </p>
      )}
    </div>
    {user.links.html && (
      <Button variant="outline" size="sm" asChild>
        <a href={user.links.html} target="_blank" rel="noopener noreferrer">
          <User className="h-4 w-4 mr-1" />
          Profile
        </a>
      </Button>
    )}
  </div>
);
