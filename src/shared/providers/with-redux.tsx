import React from 'react';
import {Provider} from 'react-redux';

import {store} from '../../redux/store';

export const withReduxProvider = (component: () => React.ReactNode) => () =>
  <Provider store={store}>{component()}</Provider>;
