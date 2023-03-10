import React from 'react';
import {Navigation} from './navigation/RootStack';
import {Provider} from 'react-redux';
import {store} from './store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
