import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import PlaceCard from '../place-card/place-card';

type OfferType = {
  id: number | string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  isPremium: boolean;
  isFavorite: boolean;
}

type FavoritesItemProps = {
  //TODO: Доработать моки и сделать группировку офферов по городам
  //city?: string;
  offers: OfferType[];
}

function FavoritesItem({offers}: FavoritesItemProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoutes.Main}>
            <span>Amsterdam</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <PlaceCard key={offer.id} placeCard={offer} className = 'favorites' imgPreviewWidth = {150} imgPreviewHeight = {110} />)}
      </div>
    </li>
  );
}

export default FavoritesItem;
