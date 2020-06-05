import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from '../details/DetailsScreen';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
