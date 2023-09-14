import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import AllPlaces from './screens/AllPlaces';
import AddPlaces from './screens/AddPlace';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AllPlaces" component={AllPlaces} />
          <Stack.Screen name="AddPlace" component={AddPlaces} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
