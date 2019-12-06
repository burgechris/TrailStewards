import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function NewEntryForm() {
  return (
    <View style={{ padding: 50 }}>
      <View style={pageStyle.container}>
        <TextInput placeholder="Entry Title" style={{ width: '80%', borderBottomColor: 'black', borderBottomWidth: 1 }} />
        <Button title="ADD" />
      </View>
    </View>
  );
}

const pageStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})


