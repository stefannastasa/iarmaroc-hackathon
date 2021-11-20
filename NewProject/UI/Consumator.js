
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
    Image,
    Button
  } from 'react-native';


const styles = StyleSheet.create({
    center: {
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: 30,
      paddingBottom: 10,
      color: "#579A62",
      fontWeight: "bold",
      marginBottom: 8
    },
    background: {
        justifyContent: 'center',
        backgroundColor: '#FFFAE5', 
        flex: 1       
    },
    conterContent: {
        justifyContent: 'center',
        flex: 3
    },
    row: {
        flexDirection: "row",
        alignItems: 'center',
        paddingRight: 30,
        paddingLeft: 30,
        paddingBottom: 20
    },
    img: {
        height: 150,
        width: 150,
        marginLeft: 10
    },
    text: {
        paddingLeft: 30,
        fontSize: 20
    },
    button: {
        marginTop: 3,
        marginLeft: 3,
        marginRight: 3,
        marginBottom: 0,
        fontSize: 20
    }
})
//
const Consumator = () => {
    return (
    <View style={styles.background}>
        <Text style={styles.center}>
            Categorii de produse
        </Text>
        <View style={styles.row}>
            <View style={styles.conterContent}>
                <Image style={styles.img} source={require('./images/fructe.jpg')}/>
                <Text style={styles.text}>Fructe</Text>
            </View>
            <View style={styles.conterContent}>
                <Image style={styles.img}  source={require('./images/legume.jpg')}/>
                <Text style={styles.text}>Legume</Text>
            </View>
        </View>
        <View style={styles.row}>
            <View style={styles.conterContent}>
                <Image style={styles.img} source={require('./images/produse_lactate.jpg')}/>
                <Text style={styles.text}>Produse lactate</Text>
            </View>
            <View style={styles.conterContent}>
                <Image style={styles.img} source={require('./images/produse_de_panificatie.jpg')}/>
                <Text style={styles.text}>Produse de panificatie</Text>
            </View>
        </View>
        <View style={styles.row}>
            <View style={styles.conterContent}>
                <Image style={styles.img} source={require('./images/produse_apicole.jpg')}/>
                <Text style={styles.text}>Produse apicole</Text>
            </View>
            <View style={styles.conterContent}>
                <Image style={styles.img} source={require('./images/dulceturi_si_siropuri.jpg')}/>
                <Text style={styles.text}>Dulceturi si siropuri</Text>
            </View>  
        </View>
        <View style={styles.button}>
            <Button title="Cos de cumparaturi"
                    color="#579A62">
            </Button>
        </View>
    </View>
    );
};

export default Consumator
