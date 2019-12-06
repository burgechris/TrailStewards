import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function NewEntryForm() {
  return (
    <View style={{padding: 50}}>
      <TextInput placeholder="Entry Title" style={{borderBottomColor: 'black', borderBottomWidth: 1}} />
      <Button title="ADD" />
    </View>
  );
}

