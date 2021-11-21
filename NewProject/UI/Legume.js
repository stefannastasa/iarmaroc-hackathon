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
        top: 80,
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

const Legume = () => {
    return (
        <View style={styles.background}>
            <View>
                <Image style={styles.first_img} source={require('./images/legume.jpg')}/>
                <Text style={styles.fisrt_text}>
                    LEGUME
                </Text>
            </View>
            
            <View style={styles.row}>
                <Image 
                    style={styles.img} 
                    source={require('./images/rosii-romanesti-la-caserola-500-g-8906938875934.jpg')}/>
                <View style={styles.column}>
                    <Text style={styles.header}>
                        Roșii bio
                    </Text>

                    <Text style={styles.text}>- 7 lei/kg</Text>
                    <Text style={styles.text}>- Turda, jud Cluj</Text>
                    <Text style={styles.text}>- Beldean Nicolae</Text>

                </View>
            </View>

            <View style={styles.row}>
                <Image 
                    style={styles.img} 
                    source={require('./images/cartofi-albi-la-plasa-5-kg-8905160818718.jpg')}/>
                <View style={styles.column}>
                    <Text style={styles.header}>
                        Cartofi albi 
                    </Text>

                    <Text style={styles.text}>- 3 lei/kg</Text>
                    <Text style={styles.text}>- Dângău Mare, jud Cluj</Text>
                    <Text style={styles.text}>- Stăvar Augustin</Text>

                </View>
            </View>

            <View style={styles.row}>
                <Image 
                    style={styles.img} 
                    source={require('./images/varza.jpg')}/>
                <View style={styles.column}>
                    <Text style={styles.header}>
                        Varză de grădină 
                    </Text>

                    <Text style={styles.text}>- 5.50 lei/kg</Text>
                    <Text style={styles.text}>- Jucu, jud Cluj</Text>
                    <Text style={styles.text}>- Dulgheru Vasile</Text>

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

export default Legume



