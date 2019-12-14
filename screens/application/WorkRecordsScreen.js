import React from 'react';
import { View, FlatList, Platform, Button, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import WorkRecord from '../../components/WorkRecord';
import { WORKRECORDS } from '../../data/dummyData';
import WorkRecordEntryScreen from './WorkRecordEntryScreen';

const WorkRecordsScreen = props => {
  const workRecords = useSelector(state => state.workRecords.workRecords);

  // const recordID = props.navigation.getParam('workRecordId');

  // const selectedRecord = WORKRECORDS.find(wr => wr.id === wrId);

  return(
    <View style={styles.screen}>
        <FlatList 
          data={workRecords} 
          keyExtractor={item => item.id}
          renderItem={itemData => (
            <WorkRecord
              title={itemData.item.title}
              club={itemData.item.club}
            />
          )}
        /> 
    </View>
  );
};

WorkRecordsScreen.navigationOptions = navigationData => {
  // const wrId = navigationData.navigation.getParam('workRecordId');

  // const selectedRecord = WORKRECORDS.find(wr => wr.id === wrId);

  return {
    headerTitle: 'All Records'
  };
};  

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default WorkRecordsScreen;