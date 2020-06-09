import React from 'react';
import {
  Header,
  Left,
  Button,
  Right,
  Title,
  Body,
  Icon,
  Badge,
  Text,
} from 'native-base';

const HeaderNav = ({name, navigation, isBack = false}) => {
  let button = (
    <Button transparent onPress={() => navigation.toggleDrawer()}>
      <Icon name="menu" />
    </Button>
  );

  if (isBack === true) {
    button = (
      <Button transparent onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" />
      </Button>
    );
  }

  return (
    <Header>
      <Left>{button}</Left>
      <Body>
        <Title>{name}</Title>
      </Body>
      <Right>
        <Button
          transparent
          onPress={() => navigation.navigate('Notifications')}>
          <Badge>
            <Text>2</Text>
          </Badge>
        </Button>
      </Right>
    </Header>
  );
};

export default HeaderNav;
