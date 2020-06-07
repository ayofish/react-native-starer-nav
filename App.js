import 'react-native-gesture-handler';
import React from 'react';
// import SettingsStackScreen from './src/settings/SettingsStackScreen';
import HomeScreenRouter from './src/home/HomeScreenRouter';
import ClubScreenRouter from './src/club/ClubScreenRouter';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
// const Tab = createBottomTabNavigator();
import {Content, Button, Container, Text, Header} from 'native-base';
import Sidebar from './src/commons/Sidebar';

function NotificationsScreen({navigation}) {
  return (
    <Container>
      <Header />
      <Content padder>
        <Button onPress={() => navigation.goBack()} title="Go back home">
          <Text>Home</Text>
        </Button>
      </Content>
    </Container>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreenRouter} />
        <Drawer.Screen name="Club" component={ClubScreenRouter} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
