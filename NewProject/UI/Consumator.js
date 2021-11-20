
import React from 'react';
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';


const styles = StyleSheet.create({
    center: {
      alignItems: 'center'
    },
    background :{
        color : '#FFFAE5',
        
    }
})

const Consumator = () => {
    return (
    <View style = {styles.background} >
        <Text style={center}> HI !</Text>
    </View>
    );
};

export default Consumator
