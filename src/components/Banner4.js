import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Banner4 = () => {
  return (
    <View style={styles.upibanner}>
              <Text style={{color:"black",fontWeight:"bold"}}>LOANS & CREDIT CARDS</Text>
              <View style={styles.imageandupi}>
                
              </View>
            </View>
  )
}

export default Banner4

const styles = StyleSheet.create({
      upi: {
        width: 20,
        height: 20,
      },
      upibanner: {
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:10,
        
      },
      imageandupi: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      } 
})