import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { DicePicker } from './components/dicepicker/DicePicker';
import { RollButton } from './components/rollbutton/RollButton';
import { ResultArea } from './components/resultarea/ResultArea';
import { CurrentDice } from './components/currentdice/CurrentDice';

interface AppState {
    amountOfRingDice: number;
    amountOfSkillDice: number;
    ringDiceResult: number[];
    skillDiceResult: number[];
}

interface AppProps {}

export default class App extends Component<AppProps, AppState> {
    constructor(props: AppProps)
    {
        super(props);

        this.state = {
            amountOfRingDice: 0,
            amountOfSkillDice: 0,
            skillDiceResult: [],
            ringDiceResult: [],
        }

        this.addRingDie = this.addRingDie.bind(this);
        this.removeRingDie = this.removeRingDie.bind(this);
        this.addSkillDie = this.addSkillDie.bind(this);
        this.removeSkillDie = this.removeSkillDie.bind(this);
    }

    addRingDie() {
        if (this.state.amountOfRingDice < 10)
            this.setState({ amountOfRingDice: this.state.amountOfRingDice + 1 });
    }

    removeRingDie() {
        if (this.state.amountOfRingDice > 0)
            this.setState({ amountOfRingDice: this.state.amountOfRingDice - 1 });
    }

    addSkillDie() {
        if (this.state.amountOfSkillDice < 10)
            this.setState({ amountOfSkillDice: this.state.amountOfSkillDice + 1 });
    }

    removeSkillDie() {
        if (this.state.amountOfSkillDice > 0)
            this.setState({ amountOfSkillDice: this.state.amountOfSkillDice - 1 });
    }

    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.title}>L5R dice app</Text>
            <DicePicker amountOfRingDice={this.state.amountOfRingDice} amountOfSkillDice={this.state.amountOfSkillDice} addRingDie={this.addRingDie} removeRingDie={this.removeRingDie} addSkillDie={this.addSkillDie} removeSkillDie={this.removeSkillDie} />
            <CurrentDice amountOfRingDice={this.state.amountOfRingDice} amountOfSkillDice={this.state.amountOfSkillDice} />
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
