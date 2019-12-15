import React, { useState } from 'react';
import { View, FlatList, Text, Platform, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import WorkRecord from '../../components/WorkRecord';
import WorkRecordDetails from '../../components/WorkRecordDetails';
import { MEMBERGROUPS } from '../../data/dummyData';

const WorkRecordsScreen = props => {
  const memGrId = props.navigation.getParam('memberGroupId');

  const workRecords = useSelector(state => state.workRecords.workRecords);

  const displayedWorkRecords = workRecords.filter(wr => wr.memberGroupId.indexOf(memGrId) >= 0);

  const [detailView, setDetailView] = useState(false);

  const seeDetailsHandler = () => {
    setDetailView(true);
  }

  if (displayedWorkRecords.length === 0) {
    return (
      <View>
        <Text>Oops. No Records Found.</Text>
      </View>
    )
  }

  return(
    
    <View style={styles.screen}>
      <FlatList 
        data={displayedWorkRecords} 
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <TouchableOpacity onPress={seeDetailsHandler}>
            <WorkRecord
              title={itemData.item.title}
              club={itemData.item.club}
            />
          </TouchableOpacity>
          )}
        /> 
      <WorkRecordDetails 
        visible={detailView}
        onCancel={() => setDetailView(false)}
      />
    </View>
  );
};

WorkRecordsScreen.navigationOptions = navigationData => {
  const memGrId = navigationData.navigation.getParam('memberGroupId')

  const selectedMemberGroup = MEMBERGROUPS.find(memGr => memGr.id === memGrId
    )
  return {
    headerTitle: selectedMemberGroup.name
  };
};  

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default WorkRecordsScreen;