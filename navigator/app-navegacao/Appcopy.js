import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Cadastro from './src/cadastro';
import Consulta from './src/consulta';
import Home from './src/home';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Cadastro" component={Cadastro} />
      <Drawer.Screen name="Consulta" component={Consulta} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}