import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Alert, Image} from 'react-native';

interface Props {
    amountOfRingDice: number,
    amountOfSkillDice: number,
    addRingDie: () => void,
    removeRingDie: () => void,
    addSkillDie: () => void,
    removeSkillDie: () => void,
}

export class DicePicker extends Component<Props> {
    constructor(props: Props)
    {
        super(props);
        this._onAddRingDie = this._onAddRingDie.bind(this);
        this._onRemoveRingDie = this._onRemoveRingDie.bind(this);
        this._onAddSkillDie = this._onAddSkillDie.bind(this);
        this._onRemoveSkillDie = this._onRemoveSkillDie.bind(this);
    }

    _onAddRingDie(): void {
        this.props.addRingDie();
    }

    _onRemoveRingDie(): void {
        this.props.removeRingDie();
    }    

    _onAddSkillDie(): void {
        this.props.addSkillDie();
    }

    _onRemoveSkillDie(): void {
        this.props.removeSkillDie();
    }

    render() {
        return (
            <View style={styles.dicepicker}>
                <TouchableHighlight style={styles.ringdie} onPress={this._onAddRingDie} underlayColor="white">
                    <Image style={styles.ringdiebutton} source={require('../../images/ic_ringdie_add.png')} />
                </TouchableHighlight>
                <TouchableHighlight style={styles.ringdie} onPress={this._onRemoveRingDie} underlayColor="white">
                    <Image style={styles.ringdiebutton} source={require('../../images/ic_ringdie_remove.png')} />
                </TouchableHighlight>
                <TouchableHighlight style={styles.skilldie} onPress={this._onAddSkillDie} underlayColor="white">
                    <Image style={styles.skilldiebutton} source={require('../../images/ic_skilldie_add.png')} />
                </TouchableHighlight>
                <TouchableHighlight style={styles.skilldie} onPress={this._onRemoveSkillDie} underlayColor="white">
                    <Image style={styles.skilldiebutton} source={require('../../images/ic_skilldie_remove.png')} />
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    dicepicker: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#ffffff',
    },
    ringdie: {
        flex: 1,
        width: 50,
    },
    ringdiebutton: {
    },
    skilldie: {
        flex: 1,
        width: 50,
        height: 100,
    },
    skilldiebutton: {
    },
});
