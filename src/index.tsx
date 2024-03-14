import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { Setting } from './const';
import { offers } from './mock/offers';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        placesToStayCount={Setting.PlacesToStayCount}
        offers={offers}
      />
    </Provider>
  </React.StrictMode>
);
