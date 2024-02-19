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
