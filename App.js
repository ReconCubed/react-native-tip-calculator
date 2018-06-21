/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Slider,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';


type Props = {};
export default class TipCalc extends Component<Props> {
  state = {
    amountTotal: 0,
    tipPercentage: 0.15,
    tipTotal: 0,
    split: 1,
    amountPerPerson: 0,
  };

  calculateTip(value) {
    this.state.amountTotal = parseInt(value);
    this.state.tipTotal = value * this.state.tipPercentage;
    this.setState(this.state);
    this.splitBill(this.state.split);
  }

  splitBill(value) {
    this.state.split = value;
    this.state.amountPerPerson = ((this.state.amountTotal + this.state.tipTotal)/value).toFixed(2);
    this.setState(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Amount Total:
        </Text>

        <TextInput
          style={styles.textInput}
          onChangeText={this.calculateTip.bind(this)}>
        </TextInput>

        <Text>Split Amongst: {this.state.split}</Text>

        <Slider
          maximumValue={20}
          minimumValue={1}
          step={1}
          value={this.state.split}
          onValueChange={this.splitBill.bind(this)}
          style={styles.slider}
          />

        <Text>Amount Per Person:</Text>
        <Text style={styles.amount}>
          ${this.state.amountPerPerson}
        </Text>
        <Text>
          Total Tip:
        </Text>

        <Text style={styles.amount}>
          ${this.state.tipTotal.toFixed(2)}
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
    width: 300,
    borderColor: '#60b7e2',
    fontSize: 30,
    borderWidth: 1
  },
  amount: {
    fontWeight: 'bold',
    textAlign: 'left'
  },
  slider: {
    margin: 5,
    height: 40,
    width: 200,
  }
});
