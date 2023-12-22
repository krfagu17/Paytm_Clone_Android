import React from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const LinkRupayCredit = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

        <View style={{marginTop:30}}>
            {/* Header Section */}
            <View style={{ flexDirection: 'column', padding: 10 }}>
                {/* Back Option */}
                <TouchableOpacity style={{display:"flex",flexDirection:"row",alignItems:"center",gap:20}} onPress={() => console.log('Go back')}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                    <Text style={{color:"black",fontSize:20}}>Link RuPay Credit Card</Text>
                </TouchableOpacity>

                {/* Search Option */}
                
            </View>
            <View style={{padding:20}}>
                <View style={{borderRadius:20,display:"flex",flexDirection:"row",alignItems:"center",borderColor:"black", borderWidth:2}}>
                    <AntDesign style={{marginLeft:5}} name="search1" size={24} color="black" />
                    <TextInput placeholder="Search" style={{borderLeftWidth:1,borderColor:"black"}} />
                </View>
            </View>

            {/* Rest of the component */}
            {/* ... */}
        </View>
        </SafeAreaView>
    );
};

export default LinkRupayCredit;
