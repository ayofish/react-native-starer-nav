import * as React from 'react';
import {Container, Text} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import HomeScreenNav from './HomeScreenNav';

const HomeScreen = ({navigation}) => {
  return (
    <Container>
      <Grid>
        <HomeScreenNav navigation={navigation} />
        <Row>
          <Col>
            <Text>Home screen</Text>
          </Col>
          <Col>
            <Text>Home screen</Text>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default HomeScreen;
