import React from 'react';
import {
  Button,
  Card,
  Datepicker,
  Icon,
  IconProps,
  Input,
  Text,
} from '@ui-kitten/components';
import Screen from 'components/screen';
import {View} from 'react-native';

const BackIcon = (props: IconProps) => <Icon {...props} name="arrow-back" />;

export default function ComponentsScreen() {
  return (
    <Screen title="Components">
      <Card
        header={props => (
          <View {...props}>
            <Text category="h5">HEADER</Text>
          </View>
        )}>
        <Input
          placeholder="Place your Text"
          label="Super label"
          status="basic"
          caption="Caption"
        />
        <Datepicker label="Label" caption="Caption" placeholder="Pick Date" />
        <Button accessoryLeft={BackIcon}>test</Button>
      </Card>
    </Screen>
  );
}
