import { StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native'
import React from 'react'
import Banner4 from './Banner4'



const IconSection3 = () => {

  return (
    <View style={styles.mainContainer}>
      <Banner4 />
      <ScrollView style={styles.scrollView} horizontal={true} >

        <View style={[styles.scrollContainer,]}>
          <View style={[styles.inside, styles.br, styles.bb]}>
            <Image style={styles.img} source={require("../assets/iconsection3/loan.png")} />
            <Text style={{ color: "black" }}>Pay Loan</Text>
          </View>
          <View style={[styles.inside, styles.br]}>
            <Image style={styles.img} source={require("../assets/iconsection3/business-credit-score.png")} />
            <Text style={{ color: "black" }}>Free Credit</Text>
            <Text style={{ color: "black" }}>Score</Text>
          </View>
          <View style={[styles.inside, styles.bb]}><Image style={styles.img} source={require("../assets/iconsection3/personalLoan.png")} />
            <Text style={{ color: "black" }}>Personal</Text>
            <Text style={{ color: "black" }}>Loan</Text>
          </View>
          <View style={[styles.inside]}>
            <Image style={styles.img} source={require("../assets/iconsection3/credit-card.png")} />
            <Text style={{ color: "black" }}>Credit</Text>
            <Text style={{ color: "black" }}>Card</Text>
          </View>
        </View>


        <View style={[styles.scrollContainer,]}>
          <Image style={styles.img2} source={require("../assets/iconsection3/cardTag.jpg")} />
        </View>

        <View style={[styles.scrollContainer2,]}>
          <View style={[styles.thirdCard]}>
            <Text style={{ color: "black", padding: 2, backgroundColor: "yellow" }}>Higher Amount</Text>
            <View>
              <Text style={{ color: "black" }}>5 Lakh tak ka instant Loan</Text>
              <Text style={{ color: "black" }}>aapka intezaar kar raha hai</Text>
              <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", }}>
                <Text style={{ color: "rgb(0, 185, 241)" }}>Apply Now</Text>
                <Image style={styles.img3} source={require("../assets/iconsection3/credit-card.png")} />
              </View>
            </View>
          </View>
          <View style={[styles.thirdCard]}></View>
        </View>

      </ScrollView>
    </View>
  )
}

export default IconSection3

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "rgba(0, 185, 241,0.2)",
    width: "100%",
    height: 300,
    padding: 10,
    marginTop: 10

  },
  scrollView: {
    display: "flex",
    gap: 20,

  },
  scrollContainer: {
    height: 200,
    width: 200,
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginRight: 10,
  },
  scrollContainer2: {
    height: 200,
    width: 200,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginRight: 10,
  },

  inside: {
    height: 100,
    width: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",


  },
  br: {
    borderRightWidth: 1,
    borderRightColor: "rgba(0,0,0,0.2)",
  },
  bl: {
    borderLeftWidth: 1,
    borderLeftColor: "rgba(0,0,0,0.2)",
  },
  bt: {
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.2)",
  },
  bb: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
  img: {
    width: 50,
    height: 50,
    alignSelf: "center"
  }
  ,
  img2: {
    width: 200,
    height: 200,
    alignSelf: "center",
    borderRadius: 10
  },
  img3: {
    width: 40,
    height: 40,

  },
  thirdCard: {
    width: "100%",
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,

  }
})