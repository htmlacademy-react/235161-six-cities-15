//import MainScreen from '../../pages/main-screen/main-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';

type AppProps = {
  placesToStayCount: number;
}

function App({placesToStayCount}: AppProps): JSX.Element {
  return (
    //<MainScreen placesToStayCount={placesToStayCount}/>
    <OfferScreen/>
  );
}

export default App;
