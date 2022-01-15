import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HelloWorldScreen from 'screens/HelloWorld';
import DatabaseScreen from 'screens/Tests/Database';

const Stack = createNativeStackNavigator<App.Navigation.ParamList>();
const StackNavigator = Stack.Navigator;
const StackScreen = Stack.Screen;

export default function Navigation() {
  return (
    <NavigationContainer>
      <StackNavigator initialRouteName="APP.HOME">
        <StackScreen name="APP.HOME" component={HelloWorldScreen} />
        <StackScreen name="TESTS.DATABASE" component={DatabaseScreen} />
      </StackNavigator>
    </NavigationContainer>
  );
}
