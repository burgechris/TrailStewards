import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function NewEntryForm() {
  return (
    <View>
      <View style={styles.screen}>
        <TextInput placeholder="Entry Title" style={styles.inputContainer} />
        <TextInput placeholder="Name" style={styles.inputContainer} />
        <TextInput placeholder="Date" type='date' style={styles.inputContainer} />
        <TextInput placeholder="Land Manager" style={styles.inputContainer} />
        <TextInput placeholder="Contact" style={styles.inputContainer} />
        <Button title="Submit" />
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



