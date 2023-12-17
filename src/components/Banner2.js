import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Banner2 = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.container]}>
        <Image source={require('../assets/giftbox.png')} style={{height:30,width:30}} />
        <View style={{display:"flex",flexDirection:"column",gap:5}}>
            <Text style={{color:'black'}}>Refer & Win</Text>
            <Text style={{color:'gray'}}>₹151 Cashback</Text>
        </View>
      </View>
      
      <View style={[styles.container]}>
        <Image source={require('../assets/giftbox.png')} style={{height:30,width:30}} />
        <View style={{display:"flex",flexDirection:"column",gap:5}}>
            <Text style={{color:'black'}}>Refer & Win</Text>
            <Text style={{color:'gray'}}>₹151 Cashback</Text>
        </View>
      </View>
    </View>
  )
}

export default Banner2

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:"rgba(0,185,241,0.2)",
        height:60,
        width:"100%",
        marginTop:10,
        borderRadius:10,
        justifyContent:"space-evenly",
        alignItems:"center",
        display:"flex",
        flexDirection:"row",
        
    },
    container: {
        backgroundColor: 'white',
        height: 50,
        width: '48%',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems:"center",
        flexDirection:"row",
        
       
      },

})