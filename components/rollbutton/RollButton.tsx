import React, { Component } from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

interface Props {}
export class RollButton extends Component<Props> {
    _onRoll() {
        Alert.alert('Roll!');
    }

    render() {
        return (
            <View style={styles.button}>
                <Button onPress={this._onRoll} title="Roll" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
    },
});
