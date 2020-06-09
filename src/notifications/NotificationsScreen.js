import React from 'react';
import {
  Container,
  Text,
  Content,
  List,
  ListItem,
  Left,
  Right,
  Icon,
} from 'native-base';
import HeaderNav from '../commons/HeaderNav';

function NotificationsScreen({navigation}) {
  const title = 'Notifications';
  return (
    <Container>
      <HeaderNav isBack={true} name={title} navigation={navigation} />
      <Content padder>
        <List>
          <ListItem>
            <Left>
              <Text>Nathaniel Clyne</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Nathaniel Clyne</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
}

export default NotificationsScreen;
