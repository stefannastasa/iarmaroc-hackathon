import React from "react"
import {StyleSheet, Text, Image, View, SafeAreaView} from "react-native"


//const LogIn_Screen = {}

const LogIn_Screen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Image source={require("./images/iarmarocLogo.png")}/>
            <Text>Log in</Text>
        </SafeAreaView>
    );
}

 /*
        <View style={[styles.container, {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "column"
          }]}>
            <Image source={require('./iarmaroc logo.png')}/>
            
            <View style={{ flex: 3, backgroundImage: logo }} />
            <View style={{ flex: 2, backgroundColor: "purple" }} />
            <View style={{ flex: 1, backgroundColor: "green" }} />
            
          </View>
        */

const styles = StyleSheet.create({
    container: {
        flex: 1,
       //backgroundColour: "red",
        alignItems: "center",
        //justifyContent: "center",
        padding: 20,
    }
})


export default LogIn_Screen