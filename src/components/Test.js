import React from 'react'
import { Image, View,StyleSheet} from 'react-native'
import { Carousel } from 'react-native-ui-lib'


const Test = () => {
  return (
    <View>
<Carousel pagingEnabled itemSpacings={5}  autoplay={true} onChangePage={() => console.log('page changed')}>
    <View style={styles.container}>
 <Image source={require('../assets/giftbox.png')} style={{height:30,width:30}} />
    </View>

    <View style={styles.container}>
 <Image source={require('../assets/giftbox.png')} style={{height:30,width:30}} />
    </View>
    <View style={styles.container}>
 <Image source={require('../assets/giftbox.png')} style={{height:30,width:30}} />
    </View>

</Carousel>
    </View>
  )
}

export default Test;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    height: 100,
    width: '100%',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems:"center",

  },
});

