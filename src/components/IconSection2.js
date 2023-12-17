import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import paytm from '../assets/paytm.png'


const IconSection2 = () => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.icons}>
         <Image source={require('../assets/iconsection2/mobileRecharge.png')} style={{height:52,width:40}} />
        </View>
        <Text style={{color:"black",fontWeight:"bold"}}>Mobile </Text>
        <Text style={{color:"black",fontWeight:"bold"}}>Recharge </Text>
      </View>

      <View style={{display:"flex",flexWrap:'wrap'}}>
        <View style={styles.icons}>
        <Image source={require('../assets/iconsection2/RentViaCreditCard.png')} style={{height:50,width:42}} />
        </View>
        <Text style={{color:"black",fontWeight:"bold",}}>Rent Via Credit </Text>
        <Text style={{color:"black",fontWeight:"bold",textAlign:"center"}}>Card </Text>
      </View>

      <View>
        <View style={styles.icons}>
        <Image source={require("../assets/iconsection2/dthrecharge.png")} style={{height:40,width:40}} />
         <Text style={{color:"white",fontWeight:"bold",marginLeft:10}}>CREDIT</Text>
        </View>
        <Text style={{color:"black",fontWeight:"bold"}}>DTH Recharge</Text>
        
      </View>

      <View>
        <View style={styles.icons}>
        <Image source={require("../assets/iconsection2/electricity.png")} style={{height:40,width:40}} />
        </View>
        <Text style={{color:"black",fontWeight:"bold"}}>Electric Bill</Text>
        
      </View>

      <View>
        <View style={styles.icons2}>
        <Image source={require("../assets/iconsection2/atm-card.png")} style={{height:40,width:40}} />
        </View>
        <Text style={{color:"black",fontWeight:"bold"}}>Credit Card</Text>
        <Text style={{color:"black",fontWeight:"bold" ,textAlign:"center"}}>Payment</Text>
      </View>
      <View>
        <View style={styles.icons2}>
        <Image source={paytm} style={{height:120,width:80}} />
        </View>
        <Text style={{color:"black",fontWeight:"bold"}}>FASTTag</Text>
        <Text style={{color:"black",fontWeight:"bold"}}>Recharge</Text>
      </View>

      <View>
        <View style={styles.icons2}>
        <Image source={require("../assets/iconsection2/education.png")} style={{height:40,width:40}} />
        </View>
        <Text style={{color:"black",fontWeight:"bold"}}>Education</Text>
        <Text style={{color:"black",fontWeight:"bold"}}>Fee</Text>
      </View>

      <View>
        <View style={styles.icons2}>
         <AntDesign name="arrowright" size={40} color="black" />
        </View>
        <Text style={{color:"black",fontWeight:"bold"}}>View More</Text>
      </View>
    </View>
  )
}

export default IconSection2

const styles = StyleSheet.create({
    mainContainer:{
      marginTop:20,
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      flexWrap:"wrap",
      
    },
    icons:{
          height:80,
          width:80,
          backgroundColor:"white",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          borderRadius:30,
          
  
      },
      icons2:{
        height:80,
        width:80,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30,
        
        marginTop:20,
  
    }
  })