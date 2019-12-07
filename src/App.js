import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewEntryForm from './NewEntryForm';
import Header from '.Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
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
