import Header from '../../components/header/header';
import PlaceCard from '../../components/place-card/place-card';
import { CardsData } from '../../mock/cards-data';
import Offer from '../../components/offer/offer';

function OfferScreen(): JSX.Element {
  return (
    <div className="page">

      <Header />

      <main className="page__main page__main--offer">

        <Offer/>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {CardsData.map((card) => <PlaceCard key={card.id} placeCard={card} className='near-places'/>)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
