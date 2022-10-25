import { useFonts } from 'expo-font';
import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Provider } from 'react-redux';
import { init } from './db/index.js';
import AppNavigator from './navigation';
import store from './store/reducers/index.js';

export default function App() {

  const [loaded] = useFonts({
    AleoBold: require('./assets/fonts/Aleo-Bold.ttf'),
    AleoBoldItalic: require('./assets/fonts/Aleo-BoldItalic.ttf'),
    AleoItalic: require('./assets/fonts/Aleo-Italic.ttf'),
    AleoLight: require('./assets/fonts/Aleo-Light.ttf'),
    AleoLightItalic: require('./assets/fonts/Aleo-LightItalic.ttf'),
    AleoRegular: require('./assets/fonts/Aleo-Regular.ttf'),
  })

  if (!loaded) return <ActivityIndicator />

  init()
    .then(() => {
      console.log('Initialized database')
    })
    .catch(err => {
      console.error('Initializing db failed', err)
    })

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}