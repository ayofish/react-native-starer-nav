import * as React from 'react';
import {Button, Text, View} from 'react-native';
import HomeScreenNav from './HomeScreenNav';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <HomeScreenNav navigation={navigation} />
      <Text>Home screen</Text>
      <Text>Test</Text>
    </View>
  );
};

export default HomeScreen;
