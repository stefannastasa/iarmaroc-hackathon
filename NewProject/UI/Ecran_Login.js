import React from "react"
import {
    StyleSheet, 
    Text, 
    Image, 
    View, 
    SafeAreaView,
    TextInput,
    Button
} from "react-native"

//const LogIn_Screen = {}

const LogIn_Screen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={{alignItems: "center"}, {padding: 100}}>
                <Image 
                    source={require("./images/iarmarocLogo.png")} 
                    style={{
                        width: 150,
                        height: 200
                    }}
                />
            </View>
            <View style={{justifyContent: 'center'}}>
                <Text 
                        style={{fontSize: 27}}>
                        Login
                    </Text>
                    <TextInput placeholder='Username' />
                    <TextInput placeholder='Password' />
                    <View style={{margin:7}} />
                    <Button 
                        //onPress={this.props.onLoginPress}
                        title="Submit"
                        color="#579A62"
                />
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#FFFAE5"
    }
})

export default LogIn_Screen
