export const Setting = {
  PlacesToStayCount: 312,
};

type CitiesType = {
  name: string;
  isActive: boolean;
};

export const CITIES: CitiesType[] = [
  {
    name: 'Paris',
    isActive: false
  },
  {
    name: 'Cologne',
    isActive: false
  },
  {
    name: 'Brussels',
    isActive: false
  },
  {
    name: 'Amsterdam',
    isActive: true
  },
  {
    name: 'Hamburg',
    isActive: false
  },
  {
    name: 'Dusseldorf',
    isActive: false
  },
];

type SortType = {
  name: string;
  isActive: boolean;
};

export const SORT: SortType[] = [
  {
    name: 'Popular',
    isActive: true
  },
  {
    name: 'Price: low to high',
    isActive: false
  },
  {
    name: 'Price: high to low',
    isActive: false
  },
  {
    name: 'Top rated first',
    isActive: false
  },
];
