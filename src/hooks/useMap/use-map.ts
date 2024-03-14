import {useEffect, useState, useRef, MutableRefObject} from 'react';
import leaflet from 'leaflet';
import { Map } from 'leaflet';
import { LocationType } from '../../types/offer';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, currentLocation: LocationType | undefined): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current && currentLocation !== undefined) {
      const mapInstance = leaflet.map(mapRef.current, {
        center: {
          lat: currentLocation.latitude,
          lng: currentLocation.longitude,
        },
        zoom: currentLocation.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(mapInstance);

      setMap(mapInstance);
      isRenderedRef.current = true;
    }
  }, [mapRef, currentLocation]);

  return map;
}

export default useMap;
