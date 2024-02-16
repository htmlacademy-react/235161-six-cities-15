import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  placesToStayCount: number;
}

function App({placesToStayCount}: AppScreenProps): JSX.Element {
  return (
    <MainPage placesToStayCount={placesToStayCount}/>
  );
}

export default App;
