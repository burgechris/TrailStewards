import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import workRecordsReducer from './store/reducers/workRecords';
import HomeScreen from './screens/application/HomeScreen';
import Header from './components/Header';
import WorkRecordEntryScreen from './screens/application/WorkRecordEntryScreen';
import WorkRecordsScreen from './screens/application/WorkRecordsScreen';
import RecordsNavigator from './navigator/RecordsNavigator';

const rootReducer= combineReducers({
  workRecords: workRecordsReducer
});

const store = createStore(rootReducer);

export default function App() {
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
