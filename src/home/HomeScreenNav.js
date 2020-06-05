import React from 'react';
import {Button, View} from 'react-native';

const HomeScreenNav = ({navigation}) => {
  return (
    <View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreenNav;
