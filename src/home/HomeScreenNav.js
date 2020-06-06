import React from 'react';
import {Header, Button, Text, Icon, Left, Right} from 'native-base';

const HomeScreenNav = ({navigation}) => {
  return (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Right>
        <Button small bordered onPress={() => navigation.navigate('Details')}>
          <Text>Light</Text>
        </Button>
        <Button small bordered onPress={() => navigation.navigate('Details')}>
          <Text>Dark</Text>
        </Button>
      </Right>
    </Header>
  );
};

export default HomeScreenNav;
