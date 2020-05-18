import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Platform, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import WorkRecord from '../../components/WorkRecord';
import { MEMBERGROUPS } from '../../data/dummyData';
import * as workRecordsActions from '../../store/actions/workRecords';

const WorkRecordsScreen = props => {
  const memGrId = props.navigation.getParam('memberGroupId');
  const workRecords = useSelector(
		(state) => state.workRecords.availableWorkRecords
	);
  const displayedWorkRecords = workRecords.filter(wr => wr.memberGroupId.indexOf(memGrId) >= 0);
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(workRecordsActions.fetchRecords())
  }, [dispatch]);

  const seeDetailsHandler = (id, title) => {
    props.navigation.navigate('WorkRecordDetails', {
      workRecordId: id,
      workRecordTitle: title
    });
  };

  if (displayedWorkRecords.length === 0) {
    return (
      <View>
        <Text>Oops. No Records Found.</Text>
      </View>
    )
  }

  return (
		<View style={styles.screen}>
			<FlatList
				data={displayedWorkRecords}
				keyExtractor={(item) => item.id}
				renderItem={(itemData) => (
					<TouchableOpacity
						onPress={() => {
							seeDetailsHandler(itemData.item.id, itemData.item.title);
						}}
					>
						<WorkRecord title={itemData.item.title} />
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

WorkRecordsScreen.navigationOptions = navData => {
  const memGrId = navData.navigation.getParam('memberGroupId')

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