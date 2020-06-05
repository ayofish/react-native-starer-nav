import React from 'react';
import {Button, Text, View} from 'react-native';

function SettingsScreen({navigation}) {
  return (
    <View>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default SettingsScreen;
