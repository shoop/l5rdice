import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

interface Props {
    face: number;
}

export class RingDie extends Component<Props> {
    static Faces: Element[] = [
        <Image source={require('../../images/l5r_ringdie_face01.png')} />,
        <Image source={require('../../images/l5r_ringdie_face02.png')} />,
        <Image source={require('../../images/l5r_ringdie_face03.png')} />,
        <Image source={require('../../images/l5r_ringdie_face04.png')} />,
        <Image source={require('../../images/l5r_ringdie_face05.png')} />,
        <Image source={require('../../images/l5r_ringdie_face06.png')} />,
    ];

    render() {
        return (
            <View style={styles.ringdie}>
                {RingDie.Faces[this.props.face]}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ringdie: {
    },
});
