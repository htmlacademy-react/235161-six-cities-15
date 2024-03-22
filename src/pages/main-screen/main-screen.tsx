import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import { OfferType } from '../../types/offer';
import PlacesList from '../../components/places-list/places-list';
import LocationsList from '../../components/locations-list/locations-list';
import Sort from '../../components/sort/sort';
import Map from '../../components/map/map';
import EmptyPlacesContainer from '../../components/empty-places-container/empty-places-container';

function MainScreen(): JSX.Element {
  const offers = useAppSelector((state) => state.offers.cardsData);
  const currentCity = useAppSelector((state) => state.city);
  const currentSortingType = useAppSelector((state) => state.sorting);

  const [activeOffer, setActiveOffer] = useState<OfferType | null>(null);
  const [offersInCurrentCity, setOffersInCurrentCity] = useState<OfferType[]>([]);

  const handleHover = (offer?: OfferType) => {
    setActiveOffer(offer || null);
  };

  useEffect(() => {
    setOffersInCurrentCity(offers.filter((offer) => offer.city.name === currentCity.name));
  }, [currentCity, offers]);

  useEffect(() => {
    type SortFunction = (a: OfferType, b: OfferType) => number;

    const sortFunctions: Record<string, SortFunction> = {
      'Top rated first': (a: OfferType, b: OfferType) => b.rating - a.rating,
      'Price: low to high': (a: OfferType, b: OfferType) => a.price - b.price,
      'Price: high to low': (a: OfferType, b: OfferType) => b.price - a.price,
    };

    let filteredOffers = offers.filter((offer) => offer.city.name === currentCity.name);

    if (currentSortingType !== 'Popular' && currentSortingType in sortFunctions) {
      filteredOffers = filteredOffers.slice().sort(sortFunctions[currentSortingType]);
    }

    setOffersInCurrentCity(filteredOffers);

  }, [currentSortingType, offers, currentCity]);

  return (
    <main className={`page__main page__main--index${offersInCurrentCity.length === 0 ? ' page__main--index-empty' : ''}`}>
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
        {offersInCurrentCity.length === 0 && <EmptyPlacesContainer />}
        {offersInCurrentCity.length !== 0 &&
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
          </div>}
      </div>
    </main>
  );
}

export default MainScreen;
