import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {}
export class ResultArea extends Component<Props> {
  render() {
    return (
      <View style={styles.resultarea}>
        <Text>Results</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  resultarea: {
    flex: 5,
  },
});
