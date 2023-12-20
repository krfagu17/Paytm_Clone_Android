import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Header'
import IconsSection from '../IconsSection'
import IconSection2 from '../IconSection2'
import IconSection3 from '../IconSection3'
import Banner2 from '../Banner2'
import Banner3 from '../Banner3'
import Banner4 from '../Banner4'


const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.home}>
        <Header />

        <View style={styles.banner}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.carasoule}>

            </View>
            {/* banner */}

            <View style={styles.upibanner}>
              <Text style={{ color: "black", fontWeight: "bold" }}>LOANS & CREDIT CARDS</Text>

            </View>

            {/* banner */}

            <IconsSection />

            {/* banner 2 */}

            <Banner2 />
            <Banner3 />
            <IconSection2 />
            <IconSection3 />

            {/* end point */}
            <View style={{ height: 100 }}></View>
          </ScrollView>
        </View>


      </View>


    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  home: {
    display: 'flex',

    backgroundColor: '#002E6E',
    height: '100%',
  },
  banner: {
    backgroundColor: 'white',
    height: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 0,
  },
  carasoule: {
    backgroundColor: 'red',
    height: 120,
    borderRadius: 10,
  },
  upi: {
    width: 20,
    height: 20,
  },
  upibanner: {
    backgroundColor: '#E8F4FF',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageandupi: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  }
})