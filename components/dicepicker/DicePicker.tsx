import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Alert, Image} from 'react-native';

interface Props {}
export class DicePicker extends Component<Props> {
    _onAddSkillDie(): void {
        Alert.alert('Skill die added')
    }

    _onRemoveSkillDie(): void {
        Alert.alert('Skill die removed')
    }

    _onAddRingDie(): void {
        Alert.alert('Ring die added')
    }

    _onRemoveRingDie(): void {
        Alert.alert('Ring die removed')
    }    

    render() {
        return (
            <View style={styles.dicepicker}>
                <TouchableHighlight style={styles.skilldie} onPress={this._onAddSkillDie} underlayColor="white">
                    <Image style={styles.skilldiebutton} source={require('../../images/ic_skilldie_add.png')} />
                </TouchableHighlight>
                <TouchableHighlight style={styles.skilldie} onPress={this._onRemoveSkillDie} underlayColor="white">
                    <Image style={styles.skilldiebutton} source={require('../../images/ic_skilldie_remove.png')} />
                </TouchableHighlight>
                <TouchableHighlight style={styles.ringdie} onPress={this._onAddRingDie} underlayColor="white">
                    <Image style={styles.ringdiebutton} source={require('../../images/ic_ringdie_add.png')} />
                </TouchableHighlight>
                <TouchableHighlight style={styles.ringdie} onPress={this._onRemoveRingDie} underlayColor="white">
                    <Image style={styles.ringdiebutton} source={require('../../images/ic_ringdie_remove.png')} />
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
    skilldie: {
        flex: 1,
        width: 50,
        height: 100,
    },
    skilldiebutton: {
    },
    ringdie: {
        flex: 1,
        width: 50,
    },
    ringdiebutton: {
    },
    currentdice: {
    },
});
