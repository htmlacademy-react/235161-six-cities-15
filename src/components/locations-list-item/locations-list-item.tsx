import { MouseEvent } from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { changeCity } from '../../store/action';
import { CityType } from '../../types/offer';

type LocationsListItemProps = {
  city: CityType;
}

function LocationsListItem({city}: LocationsListItemProps): JSX.Element {
  const {name} = city;
  const activeItemClass = 'tabs__item--active';
  const currentCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  function handleCityClick(evt: MouseEvent<HTMLElement>) {
    const target = evt.target as HTMLElement;
    const targetCity = target.textContent;

    if (targetCity) {
      dispatch(changeCity({cityName: targetCity}));
    }
  }

  return (
    <li
      className="locations__item"
      onClick={handleCityClick}
    >
      <a
        className={`locations__item-link tabs__item ${name === currentCity.name ? activeItemClass : ''}`}
        href="#"
      >
        <span>
          {name}
        </span>
      </a>
    </li>
  );
}

export default LocationsListItem;
