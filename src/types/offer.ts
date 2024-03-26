export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CityType = {
  name: string;
  location: LocationType;
}

export type UserType = {
  name: string;
  avatarUrl: string;
  isPro?: boolean;
}

export type ReviewItemType = {
  id: string | number;
  date: string;
  user: UserType;
  comment: string;
  rating: number;
}

export type FullOfferType = {
  id: number | string;
  title: string;
  type: string;
  price: number;
  city: CityType;
  location: LocationType;
  images: string[];
  description: string;
  bedrooms: number;
  goods: string[];
  maxAdults: number;
  host: UserType;
  comments: ReviewItemType[];
  rating: number;
  previewImage: string;
  isPremium: boolean;
  isFavorite: boolean;
}

export type OfferType = Omit<FullOfferType, 'images' | 'description' | 'bedrooms' | 'goods' | 'maxAdults' | 'comments'>;

