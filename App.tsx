import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { DicePicker } from './components/dicepicker/DicePicker';
import { RollButton } from './components/rollbutton/RollButton';
import { ResultArea } from './components/resultarea/ResultArea';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>L5R dice app</Text>
        <DicePicker />
        <RollButton />
        <ResultArea />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
});
