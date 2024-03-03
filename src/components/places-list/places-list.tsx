import { OfferType } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlacesListProps = {
  offers: OfferType[];
  className?: string;
}

function PlacesList({offers, className}: PlacesListProps): JSX.Element {
  let listClass = ' places__list';

  if (className === 'cities') {
    listClass = ' places__list tabs__content';
  }

  return (
    <div className={`${className}-places__list${listClass}`}>
      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} className='near-places'/>)}
    </div>
  );
}

export default PlacesList;
