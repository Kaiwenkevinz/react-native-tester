import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import SearchScreen from '../screens/search/SearchScreen';
import DetailScreen from '../screens/detail/DetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  const renderTabNavigation = () => {
    return (
      <Tab.Navigator
        screenOptions={() => ({
          headerShown: false,
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name={'Home'} component={HomeScreen} />
        <Tab.Screen name={'Search'} component={SearchScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name={'HomeStack'}>{renderTabNavigation}</Stack.Screen>
        <Stack.Screen name={'Detail'} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
