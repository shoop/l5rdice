import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {}
export class SkillDie extends Component<Props> {
    render() {
        return (
            <View style={styles.skilldie}>
                <Text>Skill Die</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    skilldie: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF0000',
    },
});
