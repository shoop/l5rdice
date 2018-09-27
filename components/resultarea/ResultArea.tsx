import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    ringDiceResult: number[];
    skillDiceResult: number[];
}

export class ResultArea extends Component<Props> {
    render() {
        return (
            <View style={styles.resultarea}>
                <Text>Ring dice: {this.props.ringDiceResult.join(', ')}, Skill dice: {this.props.skillDiceResult.join(', ')}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    resultarea: {
        flex: 5,
    },
});
