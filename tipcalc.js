import React, {Component} from 'react';
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
    this.state.amountPerPerson = ((this.state.amountTotal + this.state.tipTotal) / value).toFixed(2);
    this.setState(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.label}>
            Amount Total:
          </Text>

          <TextInput
            style={styles.textInput}
            onChangeText={this.calculateTip.bind(this)}>
          </TextInput>
        </View>
        <View style={styles.row}>

          <Text style={styles.label}>Split Amongst: {this.state.split}</Text>

          <Slider
            maximumValue={20}
            minimumValue={1}
            step={1}
            value={this.state.split}
            onValueChange={this.splitBill.bind(this)}
            style={styles.slider}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Amount Per Person:</Text>
          <Text style={styles.amount}>
            ${this.state.amountPerPerson}
          </Text>
        </View>
        <View style={styles.row}>

          <Text style={styles.label}>
            Total Tip:
          </Text>

          <Text style={styles.amount}>
            ${this.state.tipTotal.toFixed(2)}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  textInput: {
    textAlign: 'left',
    color: '#333333',
    margin: 5,
    height: 50,
    flex: 2,
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
    flex: 2,
  },
  label: {
    textAlign: 'left',
    margin: 10,
    flex: 1,
    color: '#60b7e2',
  },
});