import React from 'react';
import {Text, View} from 'react-native';

import Col from 'components/GridSystem/Col';
import Row from 'components/GridSystem/Row';

export default function GridScreen() {
  return (
    <View>
      <Row>
        <Col style={{backgroundColor: 'red'}}>
          <Text>Col 12</Text>
        </Col>
        <Col xs={5} style={{backgroundColor: 'red'}}>
          <Text>Col 5</Text>
        </Col>
        <Col xs={6} style={{backgroundColor: 'blue'}}>
          <Text>Col 6</Text>
        </Col>
      </Row>
    </View>
  );
}
