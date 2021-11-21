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
import { NavigationContainer } from '@react-navigation/native';

const Cos = ({navigation}) => {
    return (
        <View>
            <Text> HI! </Text>
            <Button onPress={() => navigation.navigate('Login_Screen')} title="To LogIn">

            </Button>
        </View>
    );
}

export default Cos



