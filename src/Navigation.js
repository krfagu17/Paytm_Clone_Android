import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/screens/Home';
import ScanAndPayScreen from './components/screens/ScanAndPayScreen';
import LinkRupayCredit from './components/screens/LinkRupayCredit';


const Navigation = () => {

    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="scanPay" component={ScanAndPayScreen} />
        <Stack.Screen name="linkRupayCredit" component={LinkRupayCredit} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation