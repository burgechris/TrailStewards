import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewEntryForm from './NewEntryForm';

export default function App() {
  return (
    <View style={styles.container}>
      <NewEntryForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
