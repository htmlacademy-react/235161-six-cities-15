import { OfferType } from '../../types/offer';
import FavoritesItem from '../favorites-item/favorites-item';

type CityGroupType = {
  [key: string]: OfferType[];
}

function groupOffersByCity(items: OfferType[]): CityGroupType {

  const groupedItems = items.reduce((accumulator: CityGroupType, item) => {
    const cityName = item.city.name;

    if (!accumulator[cityName]) {
      accumulator[cityName] = [];
    }

    accumulator[cityName].push(item);

    return accumulator;
  }, {});

  return groupedItems;
}

type FavoritesListProps = {
  offers: OfferType[];
}

function FavoritesList({offers}: FavoritesListProps): JSX.Element {
  const offersGroupedByCity = groupOffersByCity(offers);

  return (
    <ul className="favorites__list">
      {Object.keys(offersGroupedByCity).map((city) => <FavoritesItem key={city} city={city} offers={offersGroupedByCity[city]}/>)}
    </ul>
  );
}

export default FavoritesList;
