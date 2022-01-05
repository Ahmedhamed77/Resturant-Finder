import React from 'react';
import {BottomTabsMenu} from './src/Commons/BottomTabsMenu';
import {Route} from './src/Navigation/Route';
// import {BottomTabsMenu} from './app/Commons/BottomTabsMenu';
// import {Route} from './app/Navigation/Route';

const App = () => {
  return (
    <>
      <Route />
      <BottomTabsMenu />
    </>
  );
};

export default App;
