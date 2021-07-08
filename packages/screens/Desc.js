import React, { Component } from 'react';
import { View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { getDimen } from '../utils/MyConstant';
import { style } from './Home';
import RenderHtml from 'react-native-render-html';

import { Container, Content, Header, Body, Left, Right, Card, CardItem, Text } from 'native-base';
export default class Desc extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        var item = this.props.des.index;

        var html = item.description!=undefined?item.description:"<p></p>";

        return (<Container style={{ flex: 1 }}>
            <Header style={style.headingBg}>
                <Left>

                    <TouchableOpacity onPress={() => {
                        this.props.hideModal();
                    }}>
                        <Text>Back</Text>
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Text style={style.haedingText}>Description</Text>
                </Body>
                <Right>

                </Right>
            </Header>

            <Content style={{ padding: 10, flex: 1 }}>

                <Text style={[style.itemText1, style.commonPadding]}>{item.collectionName}</Text>


                <RenderHtml source={{ html }} />


            </Content>
        </Container>
        )
    }
}