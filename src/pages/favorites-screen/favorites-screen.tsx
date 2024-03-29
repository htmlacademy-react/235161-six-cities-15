import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import FavoritesList from '../../components/favorites-list/favorites-list';

function FavoritesScreen(): JSX.Element {
  const offers = useAppSelector((state) => state.OFFERS.cards.cardsData);

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
