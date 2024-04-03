import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { CityType } from '../../types/offer';

export const getCurrentCity = (state: State): CityType => state[NameSpace.City];
export const getCurrentCityName = (state: State): string => state[NameSpace.City].name;
