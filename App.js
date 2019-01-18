import React from 'react';
import { Provider } from 'mobx-react';
import store from './src/store';
import AppNavigator from './src/component/appNavigator';
import {YellowBox} from 'react-native';

console.disableYellowBox = true;

export default class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
