/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 * 
 * 
 */

import React from 'react';
//import type {Node} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Producator from './UI/Producator.js';
import Consumator from './UI/Consumator.js';
import LogIn_Screen from './UI/Ecran_Login.js';


/*

export default function App() {

  const [submitted, SetSubmitted] = React.useState(false);

  const onPressHandler = () => {
    SetSubmitted(!submitted),
    <View>
        <Text>------------</Text>
        <LogIn_Screen/>
    </View>
    
    
  }

    return (
      <View>
        <Button 
            onPress={onPressHandler}
            title="Submit"
            color="#579A62"
        />
        {submitted?
            <Text>My username is dumb</Text>
            
            
            :
            null
        }
      </View>
    )
}


*/

export default function App() {
    return (
      <LogIn_Screen/>
    )
}