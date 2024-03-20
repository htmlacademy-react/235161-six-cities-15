import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import PlacesList from '../../components/places-list/places-list';
import Gallery from '../../components/gallery/gallery';
import Offer from '../../components/offer/offer';
import Map from '../../components/map/map';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function OfferScreen(): JSX.Element {
  const {id} = useParams();
  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.city);
  const currentOffer = offers.find((offer) => offer.id === id);
  const offersInCurrentCity = offers.filter((offer) => offer.city.name === currentOffer?.city.name);
  const nearbyOffers = offersInCurrentCity.filter((offer) => offer.id !== id).slice(0, 3);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentOffer) {
      dispatch(changeCity({cityName: currentOffer?.city.name}));
    }
  }, [currentOffer, dispatch]);

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

        <Map offers={[...nearbyOffers, currentOffer]} activeOffer={currentOffer} classModificator = 'offer' city={currentCity}/>
      </section>

      <div className="container">
        {nearbyOffers.length !== 0 &&
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <PlacesList
            offers={nearbyOffers}
            className={'near-places__list'}
          />
        </section>}
      </div>
    </main>
  );
}

export default OfferScreen;
