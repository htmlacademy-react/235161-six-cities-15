import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Nullable } from 'vitest';
import { AppRoutes } from '../../const';
import { OfferType } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type FavoritesItemProps = {
  city: string;
  offers: OfferType[];
}

function FavoritesItem({city, offers}: FavoritesItemProps): JSX.Element | boolean {
  //TODO: Добавить проверку что в массиве есть офферы с флагом isFavorite:true, пока что костыльное решение
  const bookmarkedOffers = offers.filter((offer) => offer.isFavorite);

  const [activeOffer, setActiveOffer] = useState<Nullable<OfferType>>(null);
  const handleHover = (offer?: OfferType) => {
    setActiveOffer(offer || null);
  };

  useEffect(() => {

  }, [activeOffer]);

  return (bookmarkedOffers.length > 0 &&
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoutes.Main}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {bookmarkedOffers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onHover={handleHover}
            className = 'favorites'
            imgPreviewWidth = {150}
            imgPreviewHeight = {110}
          />
        ))}
      </div>
    </li>
  );
}

export default FavoritesItem;
