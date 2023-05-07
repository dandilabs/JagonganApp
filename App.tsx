import React, { Component } from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';
import laptop from './laptop.jpg';

const App = () => {
  return (
    <StylingReactNativeCompnent />
  )
};

const StylingReactNativeCompnent = () => {
  return (
    <View>
      <Text style={styles.text}>INi STYLING COMPONENT</Text>
      <View 
      style={{
        width:100, 
        height:100, 
        backgroundColor:'#3498db',
        borderWidth: 2,
        borderColor:'#e74c3c',
        marginTop: 20,
        marginLeft:20
      }} />
      <View style={{padding:12, backgroundColor:'#F2F2F2',width:212, borderRadius:8}}>
        <Image source={laptop} style={{width:188, height:107, borderRadius:8}} />
        <Text style={{fontSize:14, fontWeight:'bold', marginTop:16}}>New Macbook PRO 2019</Text>
        <Text style={{fontSize:12,fontWeight:'bold', marginTop:12,color: '#F2994A'}}>
            Rp.25.000.000
        </Text>
        <Text style={{fontSize:12,fontWeight:'bold',marginTop:12}}>Jakarta Barat </Text>
        <View style={{
          backgroundColor: '#2ecc71',
          paddingVertical:6,
          borderRadius:25,
          marginTop:20
          }}>
          <Text 
          style={{
            fontSize:14, 
            fontWeight:'bold', 
            color:'white',
            textAlign:'center'
            }}>
              Beli
            </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text:{
    fontSize:18,
    fontWeight:'bold',
    color: '#1abc9c',
    marginLeft:20,
    marginTop:40
  }
})

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

export default App;