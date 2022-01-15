import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {database} from '../../../database';

export default function DatabaseScreen() {
  useEffect(() => {
    async function tests() {
      const tests = await database.collections.get('tests');
      console.log(tests);
    }

    tests();
  });

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}
