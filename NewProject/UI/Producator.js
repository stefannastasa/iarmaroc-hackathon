
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
  } from 'react-native';


const styles = StyleSheet.create({
    center: {
      alignItems: 'center'
    },
    background :{
        backgroundColor: '#FFFAE5',
        flex: 1
    }
})

const Producator = () => {
    return (
    <View style={styles.background}>
      <Text style={styles.hell0}> Hello! </Text>
    </View>
    );
};

export default Producator
