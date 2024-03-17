import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';
import { AppRoutes } from '../../const';
import { OfferType } from '../../types/offer';
import PlacesList from '../places-list/places-list';

type FavoritesItemProps = {
  city: string;
  offers: OfferType[];
}

function FavoritesItem({city, offers}: FavoritesItemProps): JSX.Element | boolean {
  //TODO: Добавить проверку что в массиве есть офферы с флагом isFavorite:true, пока что костыльное решение
  const bookmarkedOffers = offers.filter((offer) => offer.isFavorite);

  // const [activeOffer, setActiveOffer] = useState<OfferType | null>(null);
  const dispatch = useAppDispatch();

  // const handleHover = (offer?: OfferType) => {
  //   setActiveOffer(offer || null);
  // };

  // if (activeOffer) {
  //   dispatch(changeCity({cityName: activeOffer?.city.name}));
  // }

  function handleLocationClick(evt: MouseEvent<HTMLElement>) {
    const target = evt.target as HTMLElement;
    const targetCity = target.textContent;

    if (targetCity) {
      dispatch(changeCity({cityName: targetCity}));
    }
  }

  return (bookmarkedOffers.length > 0 &&
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div
          className="locations__item"
          onClick={handleLocationClick}
        >
          <Link className="locations__item-link" to={AppRoutes.Main}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <PlacesList
        offers={bookmarkedOffers}
        // onHover={handleHover}
        className={'favorites__places'}
      />
    </li>
  );
}

export default FavoritesItem;
