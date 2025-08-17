type TodoPriority = "low" | "medium" | "high";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
  priority: TodoPriority;
};

type UnsplashPhoto = {
  id: string;
  slug: string;
  alternative_slugs: AlternativeSlugs;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description?: string;
  alt_description: string;
  breadcrumbs: any[];
  urls: Urls;
  links: Links;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: any;
  topic_submissions: TopicSubmissions;
  asset_type: string;
  user: User;
};

type AlternativeSlugs = {
  en: string;
  es: string;
  ja: string;
  fr: string;
  it: string;
  ko: string;
  de: string;
  pt: string;
  id: string;
};

type Urls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string | undefined;
};

type Links = {
  self: string;
  html: string;
  download: string;
  download_location: string;
};

type TopicSubmissions = {
  travel?: Travel;
  people?: People;
  experimental?: Experimental;
  night?: Night;
  film?: Film;
  "fashion-beauty"?: FashionBeauty;
  "rising-stars"?: RisingStars;
  wallpapers?: Wallpapers;
  "street-photography"?: StreetPhotography;
};

type Travel = {
  status: string;
};

type People = {
  status: string;
};

type Experimental = {
  status: string;
  approved_on: string;
};

type Night = {
  status: string;
};

type Film = {
  status: string;
  approved_on: string;
};

type FashionBeauty = {
  status: string;
};

type RisingStars = {
  status: string;
  approved_on: string;
};

type Wallpapers = {
  status: string;
};

type StreetPhotography = {
  status: string;
  approved_on: string;
};

type User = {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username?: string;
  portfolio_url?: string;
  bio?: string;
  location?: string;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number | undefined;
  total_illustrations: number | undefined;
  total_promoted_illustrations: number | undefined;
  accepted_tos: boolean | undefined;
  for_hire: boolean | undefined;
  social: Social | undefined;
};

type UserLinks = {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
};

type ProfileImage = {
  small: string;
  medium: string;
  large: string;
};

type Social = {
  instagram_username: string;
  portfolio_url?: string;
  twitter_username?: string;
  paypal_email: any;
};

type Exif = {
  make: string;
  model: string;
  name: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
};

type Position = {
  latitude: number;
  longitude: number;
};

type ImageLocation = {
  city: string | null;
  country: string | null;
  position: Position;
};

type Tag = {
  title: string;
};

type UnsplashPhotoDetails = {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  downloads: number;
  likes: number;
  liked_by_user: boolean;
  public_domain: boolean;
  description: string;
  exif: Exif;
  location: ImageLocation;
  tags: Tag[];
  urls: Urls;
  links: Links;
  user: User;
};
