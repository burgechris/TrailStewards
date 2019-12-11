import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';

import Header from './components/Header';
import Splash from './screens/Splash';
import InputScreen from './screens/InputScreen';

export default function App() {
  const [newEntry, setNewEntry] = useState(false);

  const addEntryHandler = () => {
    setNewEntry(true);
  }

  const cancelNewEntryHandler = () => {
    setNewEntry(false);
  }

  let content = <Splash onNewEntry={addEntryHandler}/>

  if (newEntry) {
    content = <InputScreen onCancel={cancelNewEntryHandler}/>
  };

  return (
    <View style={styles.screen}>
      <Header title='Trail Stewards'/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
