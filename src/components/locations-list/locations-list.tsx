import { memo } from 'react';
import LocationsListItem from '../locations-list-item/locations-list-item';
import { CITIES } from '../../const';

const LocationsList = memo((): JSX.Element =>
  (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) =>
        <LocationsListItem key={city.name} city={city}/>
      )}
    </ul>
  )
);

LocationsList.displayName = 'LocationsList';

export default LocationsList;
