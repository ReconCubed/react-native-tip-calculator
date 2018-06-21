import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  SegmentedControlIOS,
} from 'react-native';

class TipSelector extends Component {
  state = {
    selectedIndex: 0,
    values: ['Ok 15%', 'Good 18%', 'Great 20%', 'WOW! 25%'],
    percentages: [0.15, 0.18, 0.20, 0.25],
  };

  static propTypes = {
    selectionChanged: PropTypes.func.isRequired,
  };

  render() {
    return (
      <View>
        <SegmentedControlIOS
          values={this.state.values}
          selectedIndex={this.state.selectedIndex}
          onChange={(event) => {
            let _selectedIndex = event.nativeEvent.selectedSegmentIndex;
            this.setState({selectedIndex: _selectedIndex});
            this.props.selectionChanged(this.state.percentages[_selectedIndex])
          }}
          tintColor={'#60b7e2'}
          style={styles.segmentedControl}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  segmentedControl: {
    margin: 10,
    marginTop: 20,
    height: 50
  }
});


export default TipSelector;