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
        left: 80,
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


const Apictultura = () => {
    return (
        <View style={styles.background}>
            <View>
                <Image style={styles.first_img} source={require('./images/produse_apicole.jpg')}/>
                <Text style={styles.fisrt_text}>
                    PRODUSE APICOLE
                </Text>
            </View>
            
            <View style={styles.row}>
                <Image 
                    style={styles.img} 
                    source={require('./images/miere_salcam.jpg')}/>
                <View style={styles.column}>
                    <Text style={styles.header}>
                        Miere salcâm   
                    </Text>

                    <Text style={styles.text}>- 15 lei/buc</Text>
                    <Text style={styles.text}>- Iclod, jud Cluj</Text>
                    <Text style={styles.text}>- Pascal Iosif</Text>

                </View>
            </View>

            <View style={styles.row}>
                <Image 
                    style={styles.img} 
                    source={require('./images/1-Miere-poliflora-950-romaneasca.jpg')}/>
                <View style={styles.column}>
                    <Text style={styles.header}>
                        Miere polifloră   
                    </Text>

                    <Text style={styles.text}>- 14 lei/buc</Text>
                    <Text style={styles.text}>- Prisaca, jud Cluj</Text>
                    <Text style={styles.text}>- Dumitru Emanuel</Text>

                </View>
            </View>

            <View style={styles.row}>
                <Image 
                    style={styles.img} 
                    source={require('./images/polen_crud_granule.jpg')}/>
                <View style={styles.column}>
                    <Text style={styles.header}>
                        Polen crud granule
                    </Text>

                    <Text style={styles.text}>- 14 lei/100g</Text>
                    <Text style={styles.text}>- Prisaca, jud Cluj</Text>
                    <Text style={styles.text}>- Dumitru Emanuel</Text>

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

export default Apictultura



