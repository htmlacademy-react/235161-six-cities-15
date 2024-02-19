import { CITIES } from '../../const';

function LocationsList(): JSX.Element {

  const activeItemClass = 'tabs__item--active';
  const locationsListItems = CITIES.map((city) => (
    <li key={city.name} className="locations__item">
      <a className={`locations__item-link tabs__item ${city.isActive ? activeItemClass : ''}`} href="#">
        <span>{city.name}</span>
      </a>
    </li>
  ));

  return (
    <ul className="locations__list tabs__list">
      {locationsListItems}
    </ul>
  );
}

export default LocationsList;
