import LocationsListItem from '../locations-list-item/locations-list-item';
import { CITIES } from '../../const';

function LocationsList(): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) =>
        <LocationsListItem key={city.name} city={city}/>
      )}
    </ul>
  );
}

export default LocationsList;
