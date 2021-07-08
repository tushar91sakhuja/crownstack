import React, { Component } from "react";
import { Container, Content, Header, Body, Left, Right, Card, CardItem,Text } from 'native-base';
import { getRequestApi, URLS } from "../utils/ApiCall";
import { ActivityIndicator, StyleSheet, FlatList, View, Image, TouchableOpacity ,Modal} from 'react-native';
import Desc from './Desc';
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            fetching:false,
            showModal:false,
            index:0
        }
    }

    componentDidMount() {
        if (this.state.data == null) {
            this.callApi();
        }

    }

    callApi() {
        this.setState({fetching:true},()=>{
            this.callGetRequestApi();
        })
        

    }

    callGetRequestApi(){
        getRequestApi(URLS.getSongs).then(val => {
           
            this.setState({ data: val,fetching:false });
        }).catch(err => {
            console.log(err);
            this.setState({ data: {result:[]},fetching:false });
        })
    }
    render() {


        return (
            <Container style={{flex:1}}>
                {this.getHeader()}
                <View style={style.content}>

                    {this.state.data != null ? 
                    <FlatList
                        style={style.flatListStyle}
                        ItemSeparatorComponent={
                            () => <View style={style.itemSep} />
                        }
                        data={this.state.data.results}
                        keyExtractor={(item, index) => index.toString()}
                        onRefresh={() => {
                            this.callApi();
                            
                        }
                    }
                        refreshing={this.state.fetching}
                        renderItem={({ item }) => {
                         return  this.returnItem(item);
                        }}/> : <ActivityIndicator size="large" color="blue"  />}
                </View>

                  {this.state.showModal && this.showModal()}      

            </Container>
        )
    }

    getHeader(){
        return(<Header style={style.headingBg}>
            <Left>

            </Left>
            <Body>
                <Text style={style.haedingText}>Songs</Text>
            </Body>
            <Right>

            </Right>
        </Header>);
    }

    returnItem(item){
        return (
                               
            <TouchableOpacity onPress={()=>{

                this.setState({showModal:true,index:item});

            }}>
            <Card style={style.itemCardStyle} >
                <CardItem>
               
                    <Image style={style.itemImageStyle} source={{ uri: item.artworkUrl100 }}   />

                </CardItem>


                <CardItem style={style.cardItemStyle}>
                    <View>
                        <Text style={style.itemText1}>{item.collectionName}</Text>
                        <View style={{flexDirection:"row"}}>
                        <Text style={style.itemText2}>{"\n\nArtist Name\t" }</Text>
                        <Text style={style.itemText2}>{ "\n\n"+item.artistName}</Text>
                        </View>
                    </View>
                </CardItem>

            </Card>
            </TouchableOpacity>
            );
    }

    showModal(){
        return(
        <Modal
        visible={this.state.showModal}
        onRequestClose={()=>{
            this.setState({showModal:!this.state.showModal});
        }}>
        <Desc des = {this.state}
            hideModal = {()=>{
                this.setState({showModal:false});
            }}
        />
        </Modal>);
    }
    

}


export const style = StyleSheet.create({
    haedingText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },
    headingBg: {
        backgroundColor: "blue",
    },
    content: {
        backgroundColor: "cyan",
        padding: 0,
        flex:1,
       
        alignItems: 'center',
        justifyContent: 'center'
    },
    flatListStyle: { width: "100%", backgroundColor: "white" },
    itemSep: { width: 1, backgroundColor: 'gray' },
    itemCardStyle: { flexDirection: "row", padding: 10, backgroundColor: "white", borderColor: "white",flex:1 },
    itemImageStyle: { width: 100, height: 100, borderColor: "gray", borderWidth: 0.3, borderRadius: 5 },
    cardItemStyle: { overflow: "hidden",flexShrink:1,flex:1},
    itemText1: { color: "#000080", fontSize: 16,overflow:"hidden"},
    itemText2: { color: "#000080", fontSize: 12},
    commonPadding:{padding:10},
})