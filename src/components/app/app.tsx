import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
  placesToStayCount: number;
}

function App({placesToStayCount}: AppProps): JSX.Element {
  return (
    <MainScreen placesToStayCount={placesToStayCount}/>
  );
}

export default App;
