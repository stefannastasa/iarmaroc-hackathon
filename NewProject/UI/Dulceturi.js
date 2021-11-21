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
        //justifyContent: 'center',
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
        marginTop: 10
    },
    img: {
        height: 140,
        width: 140,
        marginLeft: 10
    },
    text: {
        paddingLeft: 20,
        fontSize: 20
    },
    button: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 0,
        fontSize: 30,
        width: 385,
        marginLeft: 3,
        marginRight: 3,
        height: 50
    },
    first_img:{
        width: 400,
        height: 200
    },
    fisrt_text:{
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold',
        fontFamily: 'Rasa',
        position: 'absolute',
        top: 70,
        left: 45,
        textAlign: 'center'
    },
    header:{
        paddingLeft: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    column: {
        flexDirection: "column",
    }
})

const Dulceturi = () => {
    return (
        <View style={styles.background}>
            <View>
                <Image style={styles.first_img} source={require('./images/dulceturi_si_siropuri.jpg')}/>
                <Text style={styles.fisrt_text}>
                    DULCETURI ȘI SIROPURI
                </Text>
            </View>
            
            <View style={styles.row}>
                <Image 
                    style={styles.img} 
                    source={require('./images/dulceata_zmeura.jpg')}/>
                <View style={styles.column}>
                    <Text style={styles.header}>
                        Dulceata de zmeura
                    </Text>

                    <Text style={styles.text}>- 20 lei/buc</Text>
                    <Text style={styles.text}>- Chiteni, jud Cluj</Text>
                    <Text style={styles.text}>- Varga Maria</Text>

                </View>
            </View>

            <View style={styles.row}>
                <Image 
                    style={styles.img} 
                    source={require('./images/dulceata_gutui.jpg')}/>
                <View style={styles.column}>
                    <Text style={styles.header}>
                        Dulceata Gutui
                    </Text>

                    <Text style={styles.text}>- 19 lei/buc</Text>
                    <Text style={styles.text}>- Sânnicoară, jud Cluj</Text>
                    <Text style={styles.text}>- Ionică Anamaria</Text>

                </View>
            </View>

            <View style={styles.row}>
                <Image 
                    style={styles.img} 
                    source={require('./images/sirop_muguri_de_pin.jpg')}/>
                <View style={styles.column}>
                    <Text style={styles.header}>
                        Sirop din muguri de pin
                    </Text>

                    <Text style={styles.text}>- 14 lei/100g</Text>
                    <Text style={styles.text}>- Mărișel, jud Cluj</Text>
                    <Text style={styles.text}>- Mateș Cristian</Text>

                </View>
            </View>

            <View style={styles.button}>
                <Button title="Cos de cumparaturi"
                        color="#579A62">         
                </Button>
            </View>
        </View>
    )
}

export default Dulceturi



