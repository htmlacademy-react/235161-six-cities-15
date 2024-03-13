import {useRef, useEffect} from 'react';
import leaflet, { Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { OfferType } from '../../types/offer';
import { CityDataType } from '../../mock/city';
import useMap from '../../hooks/useMap/use-map';

const DEFAULT_MARKER_URL = 'img/pin.svg';
const ACTIVE_MARKER_URL = 'img/pin-active.svg';

type MapProps = {
  city: CityDataType;
  offers?: OfferType[];
  activeOffer?: OfferType | null;
  classModificator?: string;
}

function Map({classModificator = 'cities', offers, city, activeOffer}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: DEFAULT_MARKER_URL,
    iconSize: [30, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: ACTIVE_MARKER_URL,
    iconSize: [30, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    const markers: Marker[] = [];

    if (map) {
      offers?.forEach((offer) => {
        const marker: Marker = leaflet
          .marker({
            lat: offer.city.location.latitude,
            lng: offer.city.location.longitude,
          }, {
            icon: activeOffer && activeOffer.id === offer.id ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(map);

        markers.push(marker);
      });
    }

    return () => {
      markers.forEach((marker) => {
        map?.removeLayer(marker);
      });
    };
  }, [map, offers, activeOffer, defaultCustomIcon, currentCustomIcon]);

  return (
    <section
      className={`${classModificator}__map map`}
      ref={mapRef}
    >

    </section>
  );
}

export default Map;
