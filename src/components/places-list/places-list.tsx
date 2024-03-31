import { memo } from 'react';
import { OfferType } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlacesListProps = {
  onHover?: (offer?: OfferType) => void | null;
  offers: OfferType[];
  className?: string;
}

const PlacesList = memo(({offers, className, onHover}: PlacesListProps): JSX.Element => {
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

  return (
    <div className={`${className}${listClass}`}>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onHover={className === 'cities__places-list' ? onHover : undefined}
          className={cardClass}
          {...(cardClass === 'favorites' ? { imgPreviewWidth: 150, imgPreviewHeight: 110 } : {})}
        />
      ))}
    </div>
  );
});

PlacesList.displayName = 'PlacesList';

export default PlacesList;

// function PlacesList({offers, className, onHover}: PlacesListProps): JSX.Element {
//   let listClass = ' places__list';
//   let cardClass = '';

//   if (className === 'cities__places-list') {
//     listClass = ' places__list tabs__content';
//     cardClass = 'cities';
//   } else if (className === 'near-places__list') {
//     cardClass = 'near-places';
//   } else if (className === 'favorites__places') {
//     listClass = '';
//     cardClass = 'favorites';
//   }

//   return (
//     <div className={`${className}${listClass}`}>
//       {offers.map((offer) => (
//         <PlaceCard
//           key={offer.id}
//           offer={offer}
//           onHover={className === 'cities__places-list' ? onHover : undefined}
//           className={cardClass}
//           {...(cardClass === 'favorites' ? { imgPreviewWidth: 150, imgPreviewHeight: 110 } : {})}
//         />
//       ))}
//     </div>
//   );
// }
