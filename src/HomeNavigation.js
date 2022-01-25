import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Chat from './screens/Chat';
import Add from './screens/Add';
import Home from './screens/Home';

const Tab = createMaterialTopTabNavigator();

export default function HomeNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Add" component={Add} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Chat" component={Chat} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
