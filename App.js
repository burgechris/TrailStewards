import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import workRecordsReducer from './store/reducers/workRecords';
import RecordsNavigator from './navigation/RecordsNavigator';
import HomeScreen from './screens/application/HomeScreen';
import WorkRecordEntryScreen from './screens/application/WorkRecordEntryScreen';
import WorkRecordsScreen from './screens/application/WorkRecordsScreen';

const rootReducer= combineReducers({
  workRecords: workRecordsReducer
});

const store = createStore(rootReducer);

export default function App() {
  // const [newEntry, setNewEntry] = useState(false);
  // const [viewRecords, setViewRecords] = useState(false);

  // const addEntryHandler = () => {
  //   setNewEntry(true);
  // }

  // const viewRecordsHandler = () => {
  //   setViewRecords(true);
  // }

  // const cancelNewEntryHandler = () => {
  //   setNewEntry(false);
  // }

  // let content = <HomeScreen onNewEntry={addEntryHandler} onViewRecords={viewRecordsHandler} />
  // if (newEntry) {
  //   content = <WorkRecordEntryScreen onCancel={cancelNewEntryHandler} />
  // } else if (viewRecords) {
  //   content = <WorkRecordsScreen />
  // };
  
  // const [fontLoaded, setFontLoaded] = useState(false);


  return (
    <Provider store={store}>
      <View style={styles.screen}>
        <RecordsNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});  
