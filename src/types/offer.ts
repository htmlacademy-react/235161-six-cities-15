type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type CityType = {
  name: string;
  location: LocationType;
}

export type OfferType = {
  id: number | string;
  title: string;
  type: string;
  price: number;
  city: CityType;
  rating: number;
  previewImage: string;
  isPremium: boolean;
  isFavorite: boolean;
}

