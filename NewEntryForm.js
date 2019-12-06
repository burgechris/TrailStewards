import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function NewEntryForm() {
  return (
    <View>
      <View style={styles.screen}>
        <TextInput placeholder="Entry Title" style={styles.inputContainer} />
        <Button title="ADD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
});



