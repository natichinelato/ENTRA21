import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Cadastro from './src/cadastro';
import Consulta from './src/consulta';
import Home from './src/home';

const TabMaterial = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabMaterial.Navigator>
      <TabMaterial.Screen name="Home" component={Home} />
      <TabMaterial.Screen name="Cadastro" component={Cadastro} />
      <TabMaterial.Screen name="Consulta" component={Consulta} />
    </TabMaterial.Navigator>
    </NavigationContainer>
  );
}