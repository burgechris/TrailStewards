import React from 'react';
import { View, FlatList, Platform, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import WorkRecord from '../../components/WorkRecord';
import HeaderButton from '../../components/HeaderButton';
import RecordData from '../../data/dummyData'
import WorkRecordEntryScreen from './WorkRecordEntryScreen';
import RecordsNavigator from '../../navigation/RecordsNavigator';

const WorkRecordsScreen = props => {
  // const workRecords = useSelector(state => state.workRecords.workRecords);

  return(
    <View>
      <RecordsNavigator />
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
    </View>
  );
};

WorkRecordsScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Records',
    headerRight: (
      <HeaderButtons>
        <Item
          title="Add"
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