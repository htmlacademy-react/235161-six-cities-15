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
  let cardClass = '';

  if (className === 'cities__places-list') {
    listClass = ' places__list tabs__content';
    cardClass = 'cities';
  } else if (className === 'near-places__list') {
    cardClass = 'near-places';
  } else if (className === 'favorites__places') {
    listClass = '';
    cardClass = 'favorites';
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
          onHover={className === 'cities__places-list' ? handleHover : undefined}
          className={cardClass}
          {...(cardClass === 'favorites' ? { imgPreviewWidth: 150, imgPreviewHeight: 110 } : {})}
        />
      ))}
    </div>
  );
}

export default PlacesList;
