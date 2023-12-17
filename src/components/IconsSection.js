import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Carousel } from 'react-native-ui-lib'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import rupay from '../assets/Rupay.png'
import paytm from '../assets/paytm.png'
import passbook from '../assets/passbook.png'
const IconsSection = () => {
  return (
    <Carousel  showsHorizontalScrollIndicator={true} showCounter>

    <View style={styles.mainContainer}>
      <View>
        <View style={styles.icons}>
         <MaterialCommunityIcons name="qrcode-scan" size={40} color="#fff" />
        </View>
        <Text style={{color:"black",fontWeight:"bold"}}> Scan & Pay</Text>
      </View>

      <View style={{display:"flex",flexWrap:'wrap'}}>
        <View style={styles.icons}>
         <AntDesign name="contacts" size={40} color="#fff" />
        </View>
        <Text style={{color:"black",fontWeight:"bold",}}>To Mobile </Text>
        <Text style={{color:"black",fontWeight:"bold",}}>or Contact </Text>
      </View>

      <View>
        <View style={styles.icons}>
        <Image source={rupay} style={{height:20,width:70}} />
         <Text style={{color:"white",fontWeight:"bold",marginLeft:10}}>CREDIT</Text>
        </View>
        <Text style={{color:"black",fontWeight:"bold"}}>Link RuPay</Text>
        <Text style={{color:"black",fontWeight:"bold"}}>Card to UPI</Text>
      </View>

      <View>
        <View style={styles.icons}>
         <MaterialCommunityIcons name="bank-outline" size={40} color="#fff" />
        </View>
        <Text style={{color:"black",fontWeight:"bold"}}>To Bank</Text>
        <Text style={{color:"black",fontWeight:"bold"}}>or Self A/c</Text>
      </View>

      <View>
        <View style={styles.icons2}>
        <Image source={passbook} style={{height:40,width:40}} />
        </View>
        <Text style={{color:"black",fontWeight:"bold"}}>Balance &</Text>
        <Text style={{color:"black",fontWeight:"bold"}}>Historty</Text>
      </View>
      <View>
        <View style={styles.icons2}>
        <Image source={paytm} style={{height:120,width:80}} />
        </View>
        <Text style={{color:"black",fontWeight:"bold"}}>Payttm Pay-</Text>
        <Text style={{color:"black",fontWeight:"bold"}}>ments Bank</Text>
      </View>

      <View>
        <View style={styles.icons2}>
         <MaterialCommunityIcons name="qrcode-scan" size={40} color="#fff" />
        </View>
        <Text style={{color:"black",fontWeight:"bold"}}>Wallet</Text>
      </View>

      <View>
        <View style={styles.icons2}>
         <MaterialCommunityIcons name="qrcode-scan" size={40} color="#fff" />
        </View>
        <Text style={{color:"black",fontWeight:"bold"}}>Personal Loan</Text>
      </View>
    </View>

    {/* 2ndpart */}

    <View style={styles.mainContainer}>
      <View>
        <View style={styles.icons}>
         <MaterialCommunityIcons name="qrcode-scan" size={40} color="#fff" />
        </View>
        <Text style={{color:"black",fontWeight:"bold"}}> Scan & Pay</Text>
      </View>

      <View style={{display:"flex",flexWrap:'wrap'}}>
        <View style={styles.icons}>
         <AntDesign name="contacts" size={40} color="#fff" />
        </View>
        <Text style={{color:"black",fontWeight:"bold",}}>To Mobile </Text>
        <Text style={{color:"black",fontWeight:"bold",}}>or Contact </Text>
      </View>

      <View>
        <View style={styles.icons}>
        <Image source={rupay} style={{height:20,width:70}} />
         <Text style={{color:"white",fontWeight:"bold",marginLeft:10}}>CREDIT</Text>
        </View>
        <Text style={{color:"black",fontWeight:"bold"}}>Link RuPay</Text>
        <Text style={{color:"black",fontWeight:"bold"}}>Card to UPI</Text>
      </View>

      <View>
        <View style={styles.icons}>
         <MaterialCommunityIcons name="bank-outline" size={40} color="#fff" />
        </View>
        <Text style={{color:"black",fontWeight:"bold"}}>To Bank</Text>
        <Text style={{color:"black",fontWeight:"bold"}}>or Self A/c</Text>
      </View>

      <View>
        <View style={styles.icons2}>
        <Image source={passbook} style={{height:40,width:40}} />
        </View>
        <Text style={{color:"black",fontWeight:"bold"}}>Balance &</Text>
        <Text style={{color:"black",fontWeight:"bold"}}>Historty</Text>
      </View>
      <View>
        <View style={styles.icons2}>
        <Image source={paytm} style={{height:120,width:80}} />
        </View>
        <Text style={{color:"black",fontWeight:"bold"}}>Payttm Pay-</Text>
        <Text style={{color:"black",fontWeight:"bold"}}>ments Bank</Text>
      </View>

      <View>
        <View style={styles.icons2}>
         <MaterialCommunityIcons name="qrcode-scan" size={40} color="#fff" />
        </View>
        <Text style={{color:"black",fontWeight:"bold"}}>Wallet</Text>
      </View>

      <View>
        <View style={styles.icons2}>
         <MaterialCommunityIcons name="qrcode-scan" size={40} color="#fff" />
        </View>
        <Text style={{color:"black",fontWeight:"bold"}}>Personal Loan</Text>
      </View>
    </View>
</Carousel>
  )
}

export default IconsSection

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
        backgroundColor:"#002E6E",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30,
        

    },
    icons2:{
      height:80,
      width:80,
      borderColor:"rgba(0,185,241,0.2)",
      borderWidth:2,
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:30,
      overflow:"hidden",
      marginTop:20,

  }
})