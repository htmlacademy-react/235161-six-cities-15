import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import { fetchOfferById, fetchNearbyOffers, fetchComments } from '../../store/api-actions';
import { getCurrentOffer, getCurrentOfferLoadingStatus, getNearbyOffers, getComments } from '../../store/selectors/offers-selectors';
import { getCurrentCity } from '../../store/selectors/city-selectors';
import PlacesList from '../../components/places-list/places-list';
import Gallery from '../../components/gallery/gallery';
import Offer from '../../components/offer/offer';
import Map from '../../components/map/map';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Loader from '../../components/loader/loader';

function OfferScreen(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferById(id));
      dispatch(fetchNearbyOffers(id));
      dispatch(fetchComments(id));
    }
  }, [id, dispatch]);

  const isLoading = useAppSelector(getCurrentOfferLoadingStatus);
  const currentOffer = useAppSelector(getCurrentOffer);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const currentComments = useAppSelector(getComments);
  const currentCity = useAppSelector(getCurrentCity);

  useEffect(() => {
    if (currentOffer) {
      dispatch(changeCity({cityName: currentOffer?.city.name}));
    }
  }, [currentOffer, dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (!currentOffer) {
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

        <Offer currentOffer={currentOffer} comments={currentComments} />

        <Map
          offers={[...nearbyOffers.slice(0, 3), currentOffer]}
          activeOffer={currentOffer}
          classModificator = 'offer'
          city={currentCity}
        />
      </section>

      <div className="container">
        {nearbyOffers.length !== 0 &&
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <PlacesList
            offers={nearbyOffers.slice(0, 3)}
            className={'near-places__list'}
          />
        </section>}
      </div>
    </main>
  );
}

export default OfferScreen;
