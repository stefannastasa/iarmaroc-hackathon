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
    Button,
    Link
} from 'react-native';

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 30,
        paddingBottom: 10,
        color: "#579A62",
        fontWeight: "bold",
        marginBottom: 8
      },
      background: {
          backgroundColor: '#FFFAE5', 
          flex: 1       
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
    }
})

const Cos = () => {
    return (
        <View style={styles.background}>
            <Text style={styles.center}> Cos de cumparaturi </Text>
            <View style={styles.button}>
                <Button title="Cos de cumparaturi"
                        color="#579A62">         
                </Button>
            </View>
        </View>
    );
}

export default Cos



