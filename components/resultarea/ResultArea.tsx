import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SkillDie } from '../skilldie/SkillDie';
import { RingDie } from '../ringdie/RingDie';

interface Props {
    ringDiceResult: number[];
    skillDiceResult: number[];
}

export class ResultArea extends Component<Props> {
    render() {
        const ringDiceImgs: Element[] = this.props.ringDiceResult.map((result, i) => {
                return <RingDie key={`ring-${i}`} face={result} />
            });
        const skillDiceImgs: Element[] = this.props.skillDiceResult.map((result, i) => {
                return <SkillDie key={`skill-${i}`} face={result} />
            });
    
        return (
            <View style={styles.resultarea}>
                <View style={styles.diceresults}>
                    {ringDiceImgs}
                    {skillDiceImgs}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    resultarea: {
        flex: 5,
    },
    diceresults: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
