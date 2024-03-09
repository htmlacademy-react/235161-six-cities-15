import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { OfferType } from '../../types/offer';
import PlacesList from '../../components/places-list/places-list';
import Gallery from '../../components/gallery/gallery';
import Offer from '../../components/offer/offer';
import Map from '../../components/map/map';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { CITY } from '../../mock/city';

type OfferScreenProps = {
  offers: OfferType[];
}

function OfferScreen({offers}: OfferScreenProps): JSX.Element {
  const {id} = useParams();
  const currentOffer = offers.find((offer) => offer.id === id);
  const nearbyOffers = offers.filter((offer) => offer.id !== id);

  if (typeof currentOffer === 'undefined') {
    return <NotFoundScreen />;
  }

  return (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>
          6 Cities. Offer
        </title>
      </Helmet>

      <section className="offer">

        <div className="offer__gallery-container container">
          <Gallery images={currentOffer.images}/>
        </div>

        <Offer currentOffer={currentOffer} />

        <Map offers={nearbyOffers} classModificator = 'offer' city={CITY}/>
      </section>

      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <PlacesList
            offers={nearbyOffers}
            className={'near-places__list'}
          />
        </section>
      </div>
    </main>
  );
}

export default OfferScreen;
