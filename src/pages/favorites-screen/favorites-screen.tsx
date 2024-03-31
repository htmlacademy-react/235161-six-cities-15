import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { getOffers } from '../../store/selectors/offers-selectors';
import FavoritesList from '../../components/favorites-list/favorites-list';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';

function FavoritesScreen(): JSX.Element {
  const offers = useAppSelector(getOffers);
  //TODO: Это пока заглушка, чтобы отображался компонент FavoritesEmpty
  const bookmarkedOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <main className={`page__main page__main--favorites ${bookmarkedOffers.length === 0 ? 'page__main--favorites-empty' : ''}`}>
      <Helmet>
        <title>
          6 Cities. Favorites
        </title>
      </Helmet>
      <div className="page__favorites-container container">
        <section className={`favorites ${bookmarkedOffers.length === 0 ? 'favorites--empty' : ''}`}>
          {/* <h1 className="favorites__title">Saved listing</h1> */}

          {bookmarkedOffers.length !== 0
            ? <><h1 className="favorites__title">Saved listing</h1> <FavoritesList offers={offers} /></>
            : <FavoritesEmpty />}

        </section>
      </div>
    </main>
  );
}

export default FavoritesScreen;
