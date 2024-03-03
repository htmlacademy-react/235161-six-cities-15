import { Helmet } from 'react-helmet-async';
import { OfferType } from '../../types/offer';
import FavoritesItem from '../../components/favorites-item/favorites-item';

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

type FavoritesScreenProps = {
  offers: OfferType[];
}

function FavoritesScreen({offers}: FavoritesScreenProps): JSX.Element {
  const offersGroupedByCity = groupOffersByCity(offers);

  return (
    <main className="page__main page__main--favorites">
      <Helmet>
        <title>
          6 Cities. Favorites
        </title>
      </Helmet>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {/* <FavoritesItem offers={favoriteOffersAmsterdam} /> */}
            {Object.keys(offersGroupedByCity).map((city) => <FavoritesItem key={city} city={city} offers={offersGroupedByCity[city]}/>)}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesScreen;
