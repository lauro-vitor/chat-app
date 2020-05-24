import React from 'react';
import Index from './src/index';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/configureStore';
import {YellowBox} from 'react-native';
import { MenuProvider} from 'react-native-popup-menu';
YellowBox.ignoreWarnings(['Require cycles']);
export default () => (
  <MenuProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Index />
      </PersistGate>
    </Provider>
  </MenuProvider>
);
