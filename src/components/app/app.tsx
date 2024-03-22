import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOffers } from '../../store/api-actions';
import { AppRoutes, AuthorizationStatus } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import Layout from '../layout/layout';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import Loader from '../loader/loader';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.offers.loadingStatus);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Main} element={<Layout authorizationStatus={AuthorizationStatus.Auth}/>}>
            <Route index element={<MainScreen />}></Route>
            <Route path={AppRoutes.Login} element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth} isReverse>
                <LoginScreen/>
              </PrivateRoute>
            }
            />
            <Route path={AppRoutes.Offer} element={<OfferScreen />}></Route>
            <Route
              path={AppRoutes.Favorites}
              element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                  <FavoritesScreen />
                </PrivateRoute>
              }
            />
            <Route path='*' element={<NotFoundScreen />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
