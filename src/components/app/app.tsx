import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoutes } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import Layout from '../layout/layout';

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
          <Route path={AppRoutes.Favorites} element={<FavoritesScreen/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
