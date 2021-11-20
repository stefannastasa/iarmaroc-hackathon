
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
        backgroundColor: '#FFFAE5',
        flex: 1
    }
})

const Consumator = () => {
    return (
    <View>
        <Text style={styles.center}> HI !</Text>
        <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
        <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
        <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
    </View>
    );
};

export default Consumator
