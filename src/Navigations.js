import React from 'react';
import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Reel from './screens/Reel';
import Search from './screens/Search';
import Activity from './screens/Activity';
import Profile from './screens/Profile';
import {black, white} from './utils/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  const screenOptions = {
    headerShown: false,
  };

  const scheme = useColorScheme();

  const MaterialIcon = ({icon, color}) => (
    <MaterialIcons name={icon} size={24} color={color} />
  );

  const Ionicon = ({icon, color}) => (
    <Ionicons name={icon} size={24} color={color} />
  );

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        initialRouteName="Home"
        barStyle={{backgroundColor: scheme === 'dark' ? black : white}}
        screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color}) => (
              <MaterialIcon icon="home-filled" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color}) => <Ionicon icon="md-search" color={color} />,
          }}
        />
        <Tab.Screen
          name="Reel"
          component={Reel}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color}) => (
              <MaterialIcon icon="ondemand-video" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Activity"
          component={Activity}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color}) => (
              <Ionicon icon="heart-outline" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color}) => <MaterialIcon icon="home" color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
