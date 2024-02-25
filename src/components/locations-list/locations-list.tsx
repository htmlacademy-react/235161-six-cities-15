import { CITIES, CitiesType } from '../../const';

type LocationListItemProps = {
  city: CitiesType;
  activeItemClass?: string;
}

function LocationListItem({city, activeItemClass = 'tabs__item--active'}: LocationListItemProps): JSX.Element {
  const {isActive, name} = city;
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isActive ? activeItemClass : ''}`} href="#">
        <span>{name}</span>
      </a>
    </li>
  );
}

function LocationsList(): JSX.Element {

  const locationsListItems = CITIES.map((city) =>
    <LocationListItem key={city.name} city={city}/>
  );

  return (
    <ul className="locations__list tabs__list">
      {locationsListItems}
    </ul>
  );
}

export default LocationsList;
