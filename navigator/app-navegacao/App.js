import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from "jwt-decode";

import CadUser from './src/carduser';
import Home from './src/home';
import Login from './src/login';


const TabMaterial = createMaterialTopTabNavigator();

export default function App() {
  const [perfil, setPerfil] = React.useState('')
  
  React.useEffect(()=>{
       decodificaToken()
  },[perfil])

  async function decodificaToken() {
    var token = await AsyncStorage.getItem('login')
    var token_decode = await jwt_decode(token)
    setPerfil(token_decode.perfil)
  }

  return (
    <NavigationContainer>
      <TabMaterial.Navigator>
      <TabMaterial.Screen name="Home" component={Home} />
      <TabMaterial.Screen name="Cadastro" component={CadUser} />
      <TabMaterial.Screen name="Login" component={Login} />
      
    </TabMaterial.Navigator>
    </NavigationContainer>
  );
}