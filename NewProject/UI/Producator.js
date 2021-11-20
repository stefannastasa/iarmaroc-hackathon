
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
    hell0 :{
        color : Colors.red
    }
})

const Producator = () => {
    return (
    <View style={styles.center}>
      <Text> Hello! </Text>
    </View>
    );
};

export default Producator
