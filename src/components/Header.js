import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import paytm_logo from '../assets/paytm-logo.png'

import Icon from 'react-native-vector-icons/dist/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';


const Header = () => {
  return (
    <View style={styles.header}>
      <StatusBar  animated={true}
         backgroundColor="transparent"
         barStyle={"light-conten"}
         translucent={true} />
      <View style={styles.headerLeft}>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:30}}>

        <Text style={styles.avatar}>FK</Text>
       <Image source={paytm_logo} />
        </View>
       <View style={{display:'flex',flexDirection:'row',gap:20}}>
       <Icon name="search1" size={30} color="#fff" />
       <MaterialCommunityIcons name="message-flash-outline" size={30} color="#fff" />
        </View>  
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        width:'100%',
        paddingLeft:20,
        paddingRight:20,
        display:'flex',
        
        
    },
    headerLeft:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:30,
        justifyContent:'space-between',
    },
    avatar:{
        backgroundColor:'#CB4860',
        borderRadius:20,
        padding:10,
        fontSize:20,
        fontWeight:'bold',
        color:'white',
    }
})