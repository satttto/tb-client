import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import { AppRoute } from 'app/AppRoute';


function App() {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
}

export default App;
