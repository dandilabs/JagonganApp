import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import cart from './cart.jpg';

export default function Posisition() {
  return (
    <View style={styles.wrapper}>
        <View style={styles.cardWrapper}>
            <Image source={cart} style={styles.iconCart}/>
            <Text style={styles.notif}>10</Text>
        </View>
        <Text style={styles.text}>Keranjang Belanja anda</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper:{padding:20, alignItems:'center'},
    cardWrapper:{borderWidth:1,
        borderColor:'#4398D1', 
        width:93, 
        height:93, 
        borderRadius:93 / 2,
        justifyContent:'center',
        alignItems:'center',
        position:'relative'
    },
    iconCart:{width:50, height:50},
    text: {fontSize:12, color:'#777777', fontWeight:'700', marginTop:20},
    notif:{
        fontSize:12,
        color:'white',
        backgroundColor:'#6FCF97',
        padding:4,
        borderRadius:25,
        width:24,
        height:24,
        position:'absolute',
        top:0,
        right:0
    }
});