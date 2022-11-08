import { useFonts } from 'expo-font';
import { ActivityIndicator, View } from 'react-native';
import { Provider } from 'react-redux';
import { init } from './src/db/index.js';
import AppNavigator from './src/navigation';
import store from './src/store/reducers/index.js';

export default function App() {

  const [loaded] = useFonts({
    AleoBold: require('./src/assets/fonts/Aleo-Bold.ttf'),
    AleoBoldItalic: require('./src/assets/fonts/Aleo-BoldItalic.ttf'),
    AleoItalic: require('./src/assets/fonts/Aleo-Italic.ttf'),
    AleoLight: require('./src/assets/fonts/Aleo-Light.ttf'),
    AleoLightItalic: require('./src/assets/fonts/Aleo-LightItalic.ttf'),
    AleoRegular: require('./src/assets/fonts/Aleo-Regular.ttf'),
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