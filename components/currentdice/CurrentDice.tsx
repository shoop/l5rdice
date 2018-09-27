import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {}
export class CurrentDice extends Component<Props> {
    render() {
        return (
            <View style={styles.currentdice}>
                <Text>CurrentDice</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    currentdice: {
        flex: 1,
    },
});
