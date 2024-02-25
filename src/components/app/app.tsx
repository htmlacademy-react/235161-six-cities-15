import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import Layout from '../layout/layout';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  placesToStayCount: number;
}

function App({placesToStayCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainScreen placesToStayCount={placesToStayCount}/>}></Route>
          <Route path={AppRoutes.Login} element={<LoginScreen/>}></Route>
          <Route path={AppRoutes.Offer} element={<OfferScreen/>}></Route>
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
  );
}

export default App;
