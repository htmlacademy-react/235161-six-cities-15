import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getOffers } from '../../store/action';
import { OfferType } from '../../types/offer';
import PlacesList from '../../components/places-list/places-list';
import LocationsList from '../../components/locations-list/locations-list';
import Sort from '../../components/sort/sort';
import Map from '../../components/map/map';
// import { CITY } from '../../mock/city';

function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.city);
  //const currentStoringType = useAppSelector((state) => state.sorting);
  // const currentCity = useAppSelector((state) => state.offers[0]?.city);
  // console.log(currentCity);

  const [activeOffer, setActiveOffer] = useState<OfferType | null>(null);

  const handleHover = (offer?: OfferType) => {
    setActiveOffer(offer || null);
  };

  useEffect(() => {
    dispatch(getOffers());
  }, []);

  const [offersInCurrentCity, setOffersInCurrentCity] = useState<OfferType[]>([]);

  useEffect(() => {
    setOffersInCurrentCity(offers.filter((offer) => offer.city.name === currentCity.name));
  }, [currentCity, offers]);

  return (
    <main className="page__main page__main--index">
      <Helmet>
        <title>
          6 Cities. Main page
        </title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationsList/>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offersInCurrentCity.length} places to stay in {currentCity.name}</b>
            <Sort/>
            <PlacesList
              offers={offersInCurrentCity}
              onHover={handleHover}
              className={'cities__places-list'}
            />
          </section>
          <div className="cities__right-section">
            <Map offers={offersInCurrentCity} activeOffer={activeOffer} city={currentCity}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainScreen;
