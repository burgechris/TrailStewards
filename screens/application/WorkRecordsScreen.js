import React from 'react';
import { FlatList, Button } from 'react-native';
import { useSelector } from 'react-redux';

import WorkRecord from '../../components/WorkRecord';
// import * as workRecordsActions from '../../store/actions/workRecords';

const WorkRecordsScreen = props => {
  const userRecords = useSelector(state => state.workRecords.userRecords);

  return(
    <FlatList 
      data={userRecords} 
      keyExtractor={record => record.id}
      renderItem={recordData => (
        <WorkRecord
          title={recordData.record.title}
          club={recordData.record.club}
        >
          <Button 
            title='HOME'
            onPress={props.onCancel}
          />
        </WorkRecord>
      )}
     /> 
  );
};

export default WorkRecordsScreen;