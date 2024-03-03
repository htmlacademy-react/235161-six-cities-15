import { Helmet } from 'react-helmet-async';
import { OfferType } from '../../types/offer';
import PlaceCard from '../../components/place-card/place-card';
import LocationsList from '../../components/locations-list/locations-list';
import Sort from '../../components/sort/sort';
import Map from '../../components/map/map';

type MainScreenProps = {
  placesToStayCount: number;
  offers: OfferType[];
}

function MainScreen({placesToStayCount, offers}: MainScreenProps): JSX.Element {
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
            <div className="cities__places-list places__list tabs__content">
              {offers.map((offer) => <PlaceCard key={offer.id} offer={offer}/>)}
            </div>
          </section>
          <div className="cities__right-section">
            <Map/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainScreen;
