import React from 'react';
import ClubScreen from './ClubScreen.js';
// import MainScreenNavigator from '../ChatScreen/index.js';
// import ProfileScreen from '../ProfileScreen/index.js';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import DetailsScreen from '../details/DetailsScreen';

const ClubScreenRouter = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Wall" component={ClubScreen} />
      <Tab.Screen name="Members" component={DetailsScreen} />
      <Tab.Screen name="Segments" component={DetailsScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
    </Tab.Navigator>
  );
};

export default ClubScreenRouter;
