import 'react-native-gesture-handler';
import React from 'react';
import {Platform} from 'react-native';
import SettingsScreen from './src/settings/SettingsScreen';
import HomeScreenRouter from './src/home/HomeScreenRouter';
import ClubScreenRouter from './src/club/ClubScreenRouter';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Sidebar from './src/commons/Sidebar';
import NotificationsScreen from './src/notifications/NotificationsScreen';
import {Icon} from 'native-base';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreenRouter} />
        <Drawer.Screen name="Club" component={ClubScreenRouter} />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            drawerLabel: 'Settings',
            title: 'Settings',
            drawerIcon: (config) => (
              <Icon
                name={Platform.OS === 'android' ? 'settings' : 'ios-settings'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            drawerLabel: () => null,
            title: null,
            drawerIcon: () => null,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
