import React from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from "react-native-picker-select";

const Picker = props => {
  return (
    <View style={styles.picker}>
      <RNPickerSelect {...props}/>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    width: "90%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
    marginBottom: 20
  }
});

export default Picker;
