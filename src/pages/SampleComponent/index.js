import React, { Component } from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';    
    const SampleComponent = () => {
        return (
        <View>
            <View style={{width: 80, heigh: 30, backgroundColor:'#2ecc71'}}/>
            <Text>Dandi</Text>
            <Text>Hermawan</Text>
            <Photo/>
            <TextInput style={{borderWidth:1}}/>
            <BoxGreen/>
            <Profile/>
        </View>
        )
    }
    
    const Photo = () => {
        return <Image source={{uri:'https://placeimg.com/640/480/tech'}} style={{width:100, height:100}}/>
    };
    
    class BoxGreen extends Component {
        render() {
        return <Text>Ini Component dari class</Text>
        }
    }
    
    class Profile extends Component {
        render() {
        return (
            <View>
            <Image 
            source={{uri:'https://placeimg.com/640/480/animals'}} 
            style ={{width:100, height:100, borderRadius:50}} />
            <Text style={{color:'blue' , fontSize:24}}>Ini adalah hewan</Text>
            </View>
        )
        }
    }

export default SampleComponent;