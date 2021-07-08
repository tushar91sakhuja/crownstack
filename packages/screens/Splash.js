import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { getDimen } from '../utils/MyConstant';
export default class Splash extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        var dim = getDimen();
        return (<View>


            <Image source={require('../../res/splash.jpg')} style={{ overflow: "hidden", resizeMode: 'stretch', width: dim.width, height: dim.height }}

            />

        </View>
        )
    }
}