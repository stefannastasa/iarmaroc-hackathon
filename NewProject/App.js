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
import Cos from './UI/Cos.js';
import Dulceturi from './UI/Dulceturi.js';
import Fructe from './UI/Fructe.js';
import Lactate from './UI/Lactate.js';
import Legume from './UI/Legume.js';
import Patiserie from './UI/Patiserie.js';
import Apictultura from './UI/Apicultura.js';
import ConfirmareComanda from './UI/confirmareComanda.js'

export default function App() {
    return (
      <LogIn_Screen/>
    )
}