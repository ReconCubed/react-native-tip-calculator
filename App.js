/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';


type Props = {};
export default class TipCalc extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Amount Total:
        </Text>

        <TextInput style={styles.textInput}>

        </TextInput>

        <Text>
          Total Tip:
        </Text>

        <Text style={styles.amount}>
          $10
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    textAlign: 'left',
    color: '#333333',
    margin: 5,
    height: 50,
    width: 100,
    borderColor: '#60b7e2',
    borderWidth: 1
  },
  amount: {
    fontWeight: 'bold',
    textAlign: 'left'
  }
});
