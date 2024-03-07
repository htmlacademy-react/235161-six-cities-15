import { Helmet } from 'react-helmet-async';
import { OfferType } from '../../types/offer';
import FavoritesList from '../../components/favorites-list/favorites-list';

type FavoritesScreenProps = {
  offers: OfferType[];
}

function FavoritesScreen({offers}: FavoritesScreenProps): JSX.Element {

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

          <FavoritesList
            offers={offers}
          />

        </section>
      </div>
    </main>
  );
}

export default FavoritesScreen;
