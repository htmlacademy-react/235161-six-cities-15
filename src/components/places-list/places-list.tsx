import { useState, useEffect } from 'react';
import { Nullable } from 'vitest';
import { OfferType } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlacesListProps = {
  offers: OfferType[];
  className?: string;
}

function PlacesList({offers, className}: PlacesListProps): JSX.Element {
  let listClass = ' places__list';

  if (className === 'cities__places-list') {
    listClass = ' places__list tabs__content';
  }

  const [activeOffer, setActiveOffer] = useState<Nullable<OfferType>>(null);
  const handleHover = (offer?: OfferType) => {
    setActiveOffer(offer || null);
  };

  useEffect(() => {

  }, [activeOffer]);

  return (
    <div className={`${className}${listClass}`}>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          handleHover={handleHover}
          className={`${className === 'cities__places-list' ? 'cities' : 'near-places'}`}
        />
      ))}
    </div>
  );
}

export default PlacesList;
