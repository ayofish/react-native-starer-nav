import React from 'react';
import {View} from 'react-native';
import {Container, Header, Button, Text} from 'native-base';
import {Col, Grid} from 'react-native-easy-grid';

const HomeScreenNav = ({navigation}) => {
  return (
    <View>
      <Container>
        {/* <Header /> */}
        <Grid>
          <Col>
            <Button
              small
              bordered
              onPress={() => navigation.navigate('Details')}>
              <Text>Light</Text>
            </Button>
          </Col>

          <Col>
            <Button
              small
              bordered
              onPress={() => navigation.navigate('Details')}>
              <Text>Dark</Text>
            </Button>
          </Col>
        </Grid>
      </Container>
    </View>
  );
};

export default HomeScreenNav;
