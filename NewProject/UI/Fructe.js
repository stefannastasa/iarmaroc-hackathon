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
        fontSize: 60,
        fontWeight: 'bold',
        fontFamily: 'Rasa',
        position: 'absolute',
        top: 70,
        left: 100,
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

const Fructe = () => {
    return (
        <View style={styles.background}>
            <View>
                <Image style={styles.first_img} source={require('./images/fructe.jpg')}/>
                <Text style={styles.fisrt_text}>
                    Fructe
                </Text>
            </View>
            
            <View style={styles.row}>
                <Image 
                    style={styles.img} 
                    source={require('./images/mere.jpg')}/>
                <View style={styles.column}>
                    <Text style={styles.header}>
                    Mere soi Generos
                    </Text>

                    <Text style={styles.text}>- 5 lei/kg</Text>
                    <Text style={styles.text}>- Nireș, jud Cluj</Text>
                    <Text style={styles.text}>- Despa Andrei</Text>

                </View>
            </View>

            <View style={styles.row}>
                <Image 
                    style={styles.img} 
                    source={require('./images/afine.jpg')}/>
                <View style={styles.column}>
                    <Text style={styles.header}>
                        Afine proaspete
                    </Text>

                    <Text style={styles.text}>- 15 lei/kg</Text>
                    <Text style={styles.text}>- Agârbiciu, jud Cluj</Text>
                    <Text style={styles.text}>- Lupea Constantin</Text>

                </View>
            </View>

            <View style={styles.row}>
                <Image 
                    style={styles.img} 
                    source={require('./images/struguri-albi.jpg')}/>
                <View style={styles.column}>
                    <Text style={styles.header}>
                        Struguri albi
                    </Text>

                    <Text style={styles.text}>- 3.50 lei/kg</Text>
                    <Text style={styles.text}>- Bădeni, jud Cluj</Text>
                    <Text style={styles.text}>- Mircea Gabriela</Text>

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

export default Fructe



