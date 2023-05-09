import React, { Component } from 'react';
import { Text, View } from 'react-native';

class FlexBox extends Component {
    render(){
        return(
            <View style={{flexDirection:'row'}}>
                <View style={{backgroundColor:'red', flex:1, height:50}}></View>
                <View style={{backgroundColor:'yellow',flex:1, height:50}}></View>
                <View style={{backgroundColor:'blue',flex:1, height:50}}></View>
                <View style={{backgroundColor:'black',flex:1, height:50}}></View>
            </View>
        )
    }
}

export default FlexBox;