import 'react-native-gesture-handler';
import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import HomeStackScreen from './src/home/HomeStackScreen';
// import SettingsStackScreen from './src/settings/SettingsStackScreen';
import HomeScreenRouter from './src/home/HomeScreenRouter';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
// const Tab = createBottomTabNavigator();
import {
  Content,
  Button,
  Container,
  Text,
  Header,
  Icon,
  Right,
} from 'native-base';
import HomeScreen from './src/commons/HeaderNav';
import {useWindowDimensions} from 'react-native';

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

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Header>
        <Right>
          <Button transparent onPress={() => props.navigation.toggleDrawer()}>
            <Icon name="arrow-back" />
          </Button>
        </Right>
      </Header>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
      <DrawerItem
        label="Notifications"
        onPress={() => props.navigation.navigate('Notifications')}
      />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreenRouter} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
