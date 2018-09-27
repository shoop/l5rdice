import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    amountOfRingDice: number;
    amountOfSkillDice: number;
}

export class CurrentDice extends Component<Props> {
    render() {
        return (
            <View style={styles.currentdice}>
                <Text>{this.props.amountOfRingDice} ring dice, {this.props.amountOfSkillDice} skill dice</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    currentdice: {
        flex: 1,
    },
});
