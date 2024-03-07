import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { OfferType } from '../../types/offer';
import PlacesList from '../../components/places-list/places-list';
import LocationsList from '../../components/locations-list/locations-list';
import Sort from '../../components/sort/sort';
import Map from '../../components/map/map';
import { CITY } from '../../mock/city';

type MainScreenProps = {
  placesToStayCount: number;
  offers: OfferType[];
}

function MainScreen({placesToStayCount, offers}: MainScreenProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<OfferType | null>(null);

  const handleHover = (offer?: OfferType) => {
    setActiveOffer(offer || null);
  };

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
            <b className="places__found">{placesToStayCount} places to stay in Amsterdam</b>
            <Sort/>
            <PlacesList
              offers={offers}
              onHover={handleHover}
              className={'cities__places-list'}
            />
          </section>
          <div className="cities__right-section">
            <Map offers={offers} activeOffer={activeOffer} city={CITY}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainScreen;
