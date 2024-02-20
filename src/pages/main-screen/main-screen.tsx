import PlaceCard from '../../components/place-card/place-card';
import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import Sort from '../../components/sort/sort';
import Map from '../../components/map/map';
import { CardsData } from '../../mock/cards-data';

type MainScreenProps = {
  placesToStayCount: number;
}

function MainScreen({placesToStayCount}: MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
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
                {CardsData.map((card) => <PlaceCard key={card.id} placeCard={card}/>)}
              </div>
            </section>
            <div className="cities__right-section">
              <Map/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
