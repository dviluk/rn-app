import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HelloWorldScreen from 'screens/HelloWorld';
import DatabaseScreen from 'screens/Tests/Database';
import GridScreen from 'screens/Tests/Grid';
import ComponentsScreen from 'screens/Tests/Components';
import FormScreen from 'screens/Tests/Form';
import CamScannerScreen from 'screens/Tests/CamScanner';

const Stack = createNativeStackNavigator<Navigation.ParamList>();
const StackNavigator = Stack.Navigator;
const StackScreen = Stack.Screen;

export default function Navigation() {
  return (
    <NavigationContainer>
      <StackNavigator
        initialRouteName="APP.HOME"
        screenOptions={{headerShown: false}}>
        <StackScreen name="APP.HOME" component={HelloWorldScreen} />
        <StackScreen name="TESTS.DATABASE" component={DatabaseScreen} />
        <StackScreen name="TESTS.GRID" component={GridScreen} />
        <StackScreen name="TESTS.COMPONENTS" component={ComponentsScreen} />
        <StackScreen name="TESTS.FORM" component={FormScreen} />
        <StackScreen name="TESTS.CAM" component={CamScannerScreen} />
      </StackNavigator>
    </NavigationContainer>
  );
}
