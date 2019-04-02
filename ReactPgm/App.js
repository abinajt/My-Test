/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ScreenA from './src/ScreenA';
import ScreenB from './src/ScreenB';

const Nav = StackNavigator({
  Ascreen: {
   screen: ScreenA,
   navigationOptions: {
     title: 'SCREEN A'
   }
  },
  Bscreen: {
   screen: ScreenB,
   navigationOptions: {
     title: 'SCREEN B'
   }
  }
  });
  export default class App extends React.Component{
    return() {
      return(
        <Nav />
        );
      }
    }
