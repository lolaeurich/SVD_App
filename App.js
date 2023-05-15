import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/Home"
import Cadastro from './src/Cadastro';
import Login from './src/Login';
import InitialPage from './src/InitialPage';
import QRCodeValidation from './src/QRCodeValidation';
import BarcodeScanner from './src/BarcodeScanner';
import BarcodeValidation from './src/BarcodeValidation';
import FinalScreen from './src/FinalScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="InitialPage" component={InitialPage} />
        <Stack.Screen name="QRCodeValidation" component={QRCodeValidation} />
        <Stack.Screen name="BarcodeScanner" component={BarcodeScanner} />
        <Stack.Screen name="BarcodeValidation" component={BarcodeValidation} />
        <Stack.Screen name="FinalScreen" component={FinalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App
