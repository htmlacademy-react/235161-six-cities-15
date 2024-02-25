import PlaceCard from '../../components/place-card/place-card';
import { cardsData } from '../../mock/cards-data';
import Offer from '../../components/offer/offer';

function OfferScreen(): JSX.Element {
  return (
    <main className="page__main page__main--offer">

      <Offer/>

      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {cardsData.map((card) => <PlaceCard key={card.id} placeCard={card} className='near-places'/>)}
          </div>
        </section>
      </div>
    </main>
  );
}

export default OfferScreen;
