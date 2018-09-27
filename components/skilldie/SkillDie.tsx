import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

interface Props {
    face: number;
}

export class SkillDie extends Component<Props> {
    static Faces: Element[] = [
        <Image source={require('../../images/l5r_skilldie_face01.png')} />,
        <Image source={require('../../images/l5r_skilldie_face02.png')} />,
        <Image source={require('../../images/l5r_skilldie_face03.png')} />,
        <Image source={require('../../images/l5r_skilldie_face04.png')} />,
        <Image source={require('../../images/l5r_skilldie_face05.png')} />,
        <Image source={require('../../images/l5r_skilldie_face06.png')} />,
        <Image source={require('../../images/l5r_skilldie_face07.png')} />,
        <Image source={require('../../images/l5r_skilldie_face08.png')} />,
        <Image source={require('../../images/l5r_skilldie_face09.png')} />,
        <Image source={require('../../images/l5r_skilldie_face10.png')} />,
        <Image source={require('../../images/l5r_skilldie_face11.png')} />,
        <Image source={require('../../images/l5r_skilldie_face12.png')} />,
    ];

    render() {
        return (
            <View style={styles.skilldie}>
                {SkillDie.Faces[this.props.face]}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    skilldie: {
    },
});
