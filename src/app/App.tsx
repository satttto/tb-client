import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import { AppRoute } from 'app/AppRoute';
import { Layout } from 'components/common/Layout'

function App() {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN as string;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID as string;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <Layout>
          <AppRoute />
        </Layout>
      </Provider>
    </Auth0Provider>
  );
}

export default App;
