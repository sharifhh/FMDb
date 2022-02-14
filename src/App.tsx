/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { NetworkBanner } from './components';
import { MainRoute } from './routes';
import { store } from './store';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store}>
          <NetworkBanner />
          <MainRoute />
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
