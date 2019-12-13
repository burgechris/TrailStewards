import React from 'react';
import { FlatList, Button } from 'react-native';
import { useSelector } from 'react-redux';

import WorkRecord from '../../components/WorkRecord';
import HeaderButton from '../../components/HeaderButton';
import RecordData from '../../data/dummyData'
import * as workRecordsActions from '../../store/actions/workRecords';
import WorkRecordEntryScreen from './WorkRecordEntryScreen';

const WorkRecordsScreen = props => {
  // const workRecords = useSelector(state => state.workRecords.workRecords);

  return(
    <FlatList 
      data={RecordData} 
      renderItem={itemData => (
        <WorkRecord
          title={itemData.item.title}
          club={itemData.item.club}
          onSelect={() => {
            props.navigation.navigate('WorkRecordDetail', {
              workRecordTitle: itemData.item.title,
              workRecordId: itemData.item.id
            });
          }}
        />
      )}
     /> 
  );
};

WorkRecordsScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Records',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add Work Record"
          iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
          onPress={() => {
            navData.navigation.navigate('NewWorkRecord');
          }}
        />
      </HeaderButtons>
    )
  }
}

export default WorkRecordsScreen;