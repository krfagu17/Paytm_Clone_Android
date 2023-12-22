import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Camera,useCameraDevice, } from 'react-native-vision-camera'

const ScanAndPayScreen = () => {
    const device = useCameraDevice("back"); // 'wide-angle' is an example, you can specify the type of camera you want // Select the back camera, for example



    useEffect(() => {
        permission()
    }, [])

    const permission= async()=>{
        const cameraPermission = await Camera.requestCameraPermission()
        const microphonePermission = await Camera.requestMicrophonePermission()

    }

    
    
  return (
    <View>
      <Camera
      style={{width:"100%",height:"90%"}}
      device={device}
      isActive={true}
    />
    </View>
  )
}

export default ScanAndPayScreen

const styles = StyleSheet.create({})