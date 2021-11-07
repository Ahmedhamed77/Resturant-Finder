import React from 'react';
import {BottomTabsMenu} from './src/Commons/BottomTabsMenu';
import {Route} from './src/Navigation/Route';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
};

export default App;
