import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Button, Header, Icon, Left} from 'native-base';

function Sidebar(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Header>
        <Left>
          <Button transparent onPress={() => props.navigation.toggleDrawer()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
      </Header>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default Sidebar;
