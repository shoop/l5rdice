import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    ringDiceResult: number[];
    skillDiceResult: number[];
}

export class ResultArea extends Component<Props> {
    render() {
        const ringDice: string = this.props.ringDiceResult.length > 0 ?
            `Ring dice: ${this.props.ringDiceResult.join(', ')}` : 'No ring dice';
        const skillDice: string = this.props.skillDiceResult.length > 0 ?
            `Skill dice: ${this.props.skillDiceResult.join(', ')}` : 'No skill dice';

        return (
            <View style={styles.resultarea}>
                <Text>{ringDice}, {skillDice}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    resultarea: {
        flex: 5,
    },
});
