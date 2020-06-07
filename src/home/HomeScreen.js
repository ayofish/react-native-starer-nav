import * as React from 'react';
import {Container, Text, Content, Button} from 'native-base';
import HeaderNav from '../commons/HeaderNav';

function HomeScreen({navigation}) {
  const title = 'Home';
  return (
    <Container>
      <HeaderNav name={title} navigation={navigation} />
      <Content padder>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications">
          <Text>Notifications</Text>
        </Button>
      </Content>
    </Container>
  );
}

export default HomeScreen;
