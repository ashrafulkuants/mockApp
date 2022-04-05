
import React,{useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Verification from './components/Verification';
import Dashboard from './components/Dashboard';


const Stack = createNativeStackNavigator();
const App = () => {
 useEffect(() => {
  SplashScreen.hide()
 
 }, [])
 
  return (
    <NavigationContainer >
    <Stack.Navigator screenOptions={{
    headerShown: false
  }}
 >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  </NavigationContainer>

  );
};

export default App;
