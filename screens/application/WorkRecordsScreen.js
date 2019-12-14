import React from 'react';
import { View, FlatList, Text, Platform, Button, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import WorkRecord from '../../components/WorkRecord';
import { MEMBERGROUPS } from '../../data/dummyData';

const WorkRecordsScreen = props => {
  const memGrId = props.navigation.getParam('memberGroupId');

  const workRecords = useSelector(state => state.workRecords.workRecords);

  const displayedWorkRecords = workRecords.filter(wr => wr.memberGroupId.indexOf(memGrId) >= 0);

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