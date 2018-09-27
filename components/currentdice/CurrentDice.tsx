import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

interface Props {
    amountOfRingDice: number;
    amountOfSkillDice: number;
}

export class CurrentDice extends Component<Props> {
    render() {
        const ringDice: Element[] = Array.from({ length: this.props.amountOfRingDice })
            .map((v, i) => <Image key={`ring-${i}`} style={styles.blankdie} source={require('../../images/ic_ringdie_blank.png')} />);
        const skillDice: Element[] = Array.from({ length: this.props.amountOfSkillDice })
            .map((v, i) => <Image key={`skill-${i}`} style={styles.blankdie} source={require('../../images/ic_skilldie_blank.png')} />);

        return (
            <View style={styles.currentdice}>
                {ringDice}
                {skillDice}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    currentdice: {
        flex: 1,
        flexDirection: 'row',
    },
    blankdie: {
        height: 30,
        width: 30,
    }
});
