
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
    Image
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
        flexDirection: "row",
        alignItems: 'center',
        paddingRight: 30,
        paddingLeft: 30
    },
    img: {
        height: 150,
        width: 150,
        paddingLeft: 20
    },
    text: {
        paddingLeft: 30,
        paddingBottom: 10,
        fontSize: 27
    }
})
//
const Consumator = () => {
    return (
    <View style={styles.background}>
        <View style={styles.row}>
            <Image style={styles.img} source={require('./images/fructe.jpg')}/>
            <Image style={styles.img}  source={require('./images/legume.jpg')}/>
        </View>
        <View style={styles.row}>
            <Text style={styles.text}>Fructe</Text>
            <Text style={styles.text}>Legume</Text>
        </View>
        <View style={styles.row}>
            <Image style={styles.img}  source={require('./images/produse_lactate.jpg')}/>
            <Image style={styles.img}  source={require('./images/produse_de_panificatie.jpg')}/>
        </View>
        <View style={styles.row}>
            <Text style={styles.text}>Produse lactate</Text>
            <Text style={styles.text}>Produse de panificatie</Text>
        </View>
        <View style={styles.row}>
            <Image style={styles.img}  source={require('./images/produse_apicole.jpg')}/>
            <Image style={styles.img}  source={require('./images/dulceturi_si_siropuri.jpg')}/>
        </View>
        <View style={styles.row}>
            <Text style={styles.text}>Produse apicole</Text>
            <Text style={styles.text}>Dulceturi si siropuri</Text>
        </View>
    </View>
    );
};

export default Consumator
