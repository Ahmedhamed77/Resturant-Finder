import compose from 'compose-function';

import {withNavigationContainer} from './with-navigation-container';
import {withReduxProvider} from './with-redux';

export const withProviders = compose(
  withReduxProvider,
  withNavigationContainer,
);
