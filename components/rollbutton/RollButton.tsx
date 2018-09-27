import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';

interface Props {}
export class RollButton extends Component<Props> {
  render() {
    return (
      <View style={styles.button}>
        <Button onPress={() => {
            Alert.alert('Roll!');
        }} title="Roll" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
});
