
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
    TextInput,
    Button
  } from 'react-native';


const styles = StyleSheet.create({
    center: {
      alignItems: 'center'
    },
    background :{
        backgroundColor: '#FFFAE5',
        flex: 1
    },
    titleA :{
        fontSize: 30,
        padding: 25,
        color: "#579A62"
    },
    titleB :{
        fontSize: 20,
        padding: 5
    },
    subtitlu :{
        fontSize: 23,
        padding: 5
    }

})

const ConfirmareComanda = () => {
    return (
        <View>
        <View style={styles.center}>
            <Text style={styles.titleA}> CONFIRAMRE COMADNA </Text>
        </View>
        <Text style={styles.subtitlu}> Date Livrare </Text>
        <View style={styles.titleB}>
            <Text style={styles.titleB}> Nume: </Text>
            <TextInput placeholder='introduceti numele'/>
        </View>
        <View style={styles.titleB}>
            <Text style={styles.titleB}> Prenume: </Text>
            <TextInput placeholder='introduceti prenumele'/>
        </View>
        <View style={styles.titleB}>
            <Text style={styles.titleB}> Adresa: </Text>
            <TextInput placeholder='introduceti adresa'/>
        </View>
        <View style={styles.titleB}>
            <Text style={styles.titleB}> Telefon: </Text>
            <TextInput placeholder='introduceti un numar de telefon'/>
        </View>
        <View style={styles.titleB}>
            <Text style={styles.titleB}> modalitate plata: </Text>
            <TextInput placeholder='selectati o optiune'/>
        </View>
        <Button title="COMANDA" color="#579A62"/>
    </View>
    );
};

export default ConfirmareComanda
