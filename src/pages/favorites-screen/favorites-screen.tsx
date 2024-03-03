import { Helmet } from 'react-helmet-async';
import { cardsData } from '../../mock/cards-data';
import FavoritesItem from '../../components/favorites-item/favorites-item';

function FavoritesScreen(): JSX.Element {
  const favoriteOffersAmsterdam = cardsData.filter((item) => item.isFavorite === true);

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
            <FavoritesItem offers={favoriteOffersAmsterdam} />
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesScreen;
