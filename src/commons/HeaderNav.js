import React from 'react';
import {Header, Left, Button, Right, Title, Body, Icon} from 'native-base';

const HeaderNav = ({name, navigation}) => {
  return (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>{name}</Title>
      </Body>
      <Right>
        <Button transparent onPress={() => navigation.toggleDrawer()}>
          <Icon name="settings" />
        </Button>
      </Right>
    </Header>
  );
};

export default HeaderNav;
