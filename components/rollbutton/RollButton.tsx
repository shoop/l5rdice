import React, { Component } from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

interface Props {
    amountOfRingDice: number;
    amountOfSkillDice: number;
    rollDice: () => void;
}

export class RollButton extends Component<Props> {
    constructor(props: Props)
    {
        super(props);
        this._onRoll = this._onRoll.bind(this);
    }
    
    _onRoll() {
        this.props.rollDice();
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
