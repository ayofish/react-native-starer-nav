import * as React from 'react';
import {Container, Text, Content} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import HomeScreenNav from './HomeScreenNav';

const HomeScreen = ({navigation}) => {
  return (
    <Container>
      <HomeScreenNav navigation={navigation} />
      <Content>
        <Grid>
          <Col>
            <Text>Home screen</Text>
          </Col>
          <Col>
            <Text>Home screen</Text>
          </Col>
        </Grid>
      </Content>
    </Container>
  );
};

export default HomeScreen;
