import React from 'react';

import {TabNavigation} from './src/navigation';
import {withProviders} from './src/shared';

const App = () => {
  return <TabNavigation />;
};

export default withProviders(App);
