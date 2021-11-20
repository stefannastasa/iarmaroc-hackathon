
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
    },
    row: {
        flexDirection: "row"
    }
})

const Consumator = () => {
    return (
    <View style={styles.background}>
        <View style={styles.row}>
            <Image source={require('./images/fructe.jpg')}/>
            <Image source={require('./images/legume.jpg')}/>
        </View>
        <View style={styles.row}>
            <Image source={require('./images/produse_lactate.jpg')}/>
            <Image source={require('./images/produse_de_panificatie.jpg')}/>
        </View>
        <View style={styles.row}>
            <Image source={require('./images/produse_apicole.jpg')}/>
            <Image source={require('./images/dulceturi_si_siropuri.jpg')}/>
        </View>
    </View>
    );
};

export default Consumator
