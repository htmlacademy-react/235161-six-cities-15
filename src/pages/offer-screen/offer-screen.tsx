import { Helmet } from 'react-helmet-async';
import { OfferType } from '../../types/offer';
import PlaceCard from '../../components/place-card/place-card';
import Offer from '../../components/offer/offer';

type OfferScreenProps = {
  offers: OfferType[];
}

function OfferScreen({offers}: OfferScreenProps): JSX.Element {
  return (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>
          6 Cities. Offer
        </title>
      </Helmet>

      <Offer/>

      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} className='near-places'/>)}
          </div>
        </section>
      </div>
    </main>
  );
}

export default OfferScreen;
