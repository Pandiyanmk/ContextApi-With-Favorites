import HomeScreen from './src/HomeScreen';
import FavouriteScreen from './src/FavouriteScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavouritesContextProvider from './store/context/favorites_context';

const Stack = createNativeStackNavigator();
type Props = {}

const App = (props: Props) => {
  return (
  <FavouritesContextProvider>
  <NavigationContainer>
  <Stack.Navigator initialRouteName='ScreenA'>
  <Stack.Screen name='ScreenA' component={HomeScreen}></Stack.Screen>
  <Stack.Screen name='ScreenB' component={FavouriteScreen}></Stack.Screen>
  </Stack.Navigator>
  </NavigationContainer>
  </FavouritesContextProvider>
  )
}
export default App
