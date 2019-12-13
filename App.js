import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';

import workRecordsReducer from './store/reducers/workRecords';
import Header from './components/Header';
import Splash from './screens/application/Splash';
import WorkRecordEntryScreen from './screens/application/WorkRecordEntryScreen';
import WorkRecordsScreen from './screens/application/WorkRecordsScreen';

const rootReducer= combineReducers({
  workRecords: workRecordsReducer
});

const store = createStore(rootReducer);

export default function App() {
  const [newEntry, setNewEntry] = useState(false);
  const [viewRecords, setViewRecords] = useState(false);

  const addEntryHandler = () => {
    setNewEntry(true);
  }

  const cancelNewEntryHandler = () => {
    setNewEntry(false);
  }

  const viewRecordsHandler = () => {
    setViewRecords(true);
  }

  let content = <Splash onNewEntry={addEntryHandler} onViewRecords={viewRecordsHandler} />

  if (newEntry) {
    content = <WorkRecordEntryScreen onCancel={cancelNewEntryHandler}/>
  } else if (viewRecords) {
    content = <WorkRecordsScreen />
  };

  return (
    <Provider store={store}>
      <View style={styles.screen}>
        <Header title='Trail Stewards'/>
        {content}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
