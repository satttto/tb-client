import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import { AppRoute } from 'app/AppRoute';



function App() {
  return (
    <Auth0Provider
      domain="dev-ejweryuq.us.auth0.com"
      clientId="dtGM6PtUkGwYPPbmQaNtzpoT301P0VV5"
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <AppRoute />
      </Provider>
    </Auth0Provider>
  
  );
}

export default App;
