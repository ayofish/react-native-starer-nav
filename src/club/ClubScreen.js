import React from 'react';
import {Container, Text, Content, Button} from 'native-base';
import HeaderNav from '../commons/HeaderNav';

function ClubScreen({navigation}) {
  const title = 'Club';
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

export default ClubScreen;
