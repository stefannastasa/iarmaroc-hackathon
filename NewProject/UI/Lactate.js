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
        color: 'black',
        fontSize: 50,
        fontWeight: 'bold',
        fontFamily: 'Rasa',
        position: 'absolute',
        top: 60,
        left: 70,
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

const Lactate = () => {
    return (
        <View style={styles.background}>
            <View>
                <Image style={styles.first_img} source={require('./images/produse_lactate.jpg')}/>
                <Text style={styles.fisrt_text}>
                    PRODUSE LACTATE
                </Text>
            </View>
            
            <View style={styles.row}>
                <Image 
                    style={styles.img} 
                    source={require('./images/lapte-de-vaca.jpg')}/>
                <View style={styles.column}>
                    <Text style={styles.header}>
                        Lapte de vacă
                    </Text>

                    <Text style={styles.text}>- 4 lei/l</Text>
                    <Text style={styles.text}>- Fundătura, jud Cluj</Text>
                    <Text style={styles.text}>- Constantin Marius</Text>

                </View>
            </View>

            <View style={styles.row}>
                <Image 
                    style={styles.img} 
                    source={require('./images/telemea_oaie.jpg')}/>
                <View style={styles.column}>
                    <Text style={styles.header}>
                        Telemea oaie
                    </Text>

                    <Text style={styles.text}>- 22 lei/kg</Text>
                    <Text style={styles.text}>- Gârbău, jud Cluj</Text>
                    <Text style={styles.text}>- Roșu Daniela</Text>

                </View>
            </View>

            <View style={styles.row}>
                <Image 
                    style={styles.img} 
                    source={require('./images/sirop_muguri_de_pin.jpg')}/>
                <View style={styles.column}>
                    <Text style={styles.header}>
                        Unt de casă
                    </Text>

                    <Text style={styles.text}>- 20 lei/kg</Text>
                    <Text style={styles.text}>- Băița, jud Cluj</Text>
                    <Text style={styles.text}>- Crăciun Laurențiu</Text>

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

export default Lactate



