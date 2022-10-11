import { useFonts } from 'expo-font';
import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './navigation';
import store from './store/reducers/index.js';
import MainScreen from './views/mainScreen/index';
import PeopleScreen from './views/peopleScreen';

export default function App() {

  const [view, setView] = useState('main')

  const [loaded] = useFonts({
    AleoBold: require('./assets/fonts/Aleo-Bold.ttf'),
    AleoBoldItalic: require('./assets/fonts/Aleo-BoldItalic.ttf'),
    AleoItalic: require('./assets/fonts/Aleo-Italic.ttf'),
    AleoLight: require('./assets/fonts/Aleo-Light.ttf'),
    AleoLightItalic: require('./assets/fonts/Aleo-LightItalic.ttf'),
    AleoRegular: require('./assets/fonts/Aleo-Regular.ttf'),
  })

  if (!loaded) return <ActivityIndicator />

  const changeView = (view) => {
    setView(view)
  }

  let content = <MainScreen changeView={changeView} />

  if (view === 'people') {
    content = <PeopleScreen changeView={changeView} />
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}