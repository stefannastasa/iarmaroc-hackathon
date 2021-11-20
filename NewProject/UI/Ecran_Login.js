import React from "react"
import {StyleSheet, Text, View} from "react-native"
import App from "../App"

//const LogIn_Screen = {}

const LogIn_Screen = () => {
    return(
        <View style = {styles.container}>
            <Text>This is the first screen</Text>
            
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColour: "red",
        alignItems: "center",
        justifyContent: "center",
    }
})




export default LogIn_Screen