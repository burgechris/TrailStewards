import React from 'react';
import { FlatList, Button } from 'react-native';
import { useSelector } from 'react-redux';

import WorkRecord from '../../components/WorkRecord';
import * as workRecordsActions from '../../store/actions/workRecords';

const WorkRecordsScreen = props => {
  const records = useSelector(state => state.workRecords.workRecords);

  return(
    <FlatList 
      data={records} 
      renderItem={itemData => (
        <WorkRecord
          title={itemData.item.title}
          club={itemData.item.club}
          onSelect={() => {
            props.navigation.navigate('PlaceDetail', {
              workRecordTitle: itemData.item.title,
              placeId: itemData.item.id
            });
          }}
        />
      )}
     /> 
  );
};

export default WorkRecordsScreen;