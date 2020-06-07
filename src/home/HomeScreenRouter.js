import React from 'react';
import HomeScreen from './HomeScreen.js';
// import MainScreenNavigator from '../ChatScreen/index.js';
// import ProfileScreen from '../ProfileScreen/index.js';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import DetailsScreen from '../details/DetailsScreen';

const HomeScreenRouter = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreenRouter;
