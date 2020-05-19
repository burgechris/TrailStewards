import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Platform, Alert, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import WorkRecord from '../../components/WorkRecord';
import { MEMBERGROUPS } from '../../data/dummyData';
import * as workRecordActions from '../../store/actions/workRecords';
import Colors from '../../constants/colors';

const WorkRecordsScreen = props => {
  const memGrId = props.navigation.getParam('memberGroupId');
  const workRecords = useSelector(state => state.workRecords.availableWorkRecords);
  const displayedWorkRecords = workRecords.filter(wr => wr.memberGroupId.indexOf(memGrId) >= 0);
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(workRecordActions.fetchRecords())
  }, [dispatch]);

  const seeDetailsHandler = (id, title) => {
    props.navigation.navigate('WorkRecordDetails', {
      workRecordId: id,
      workRecordTitle: title
    });
  };

  const deleteHandler = (id) => {
		Alert.alert(
			"Delete Record",
			"Are you sure you want to delete this record?",
			[
				{ text: "Cancel", style: "cancel" },
				{
					text: "Yes",
					style: "Destructive",
					onPress: () => {
						dispatch(workRecordActions.deleteRecord(id));
					},
				},
			]
		);
		// props.navigation.navigate("WorkRecords");
	};

  if (displayedWorkRecords.length === 0) {
    return (
			<View style={styles.screen}>
				<Text style={styles.oops}>Sorry, my gender-neutral dube.</Text>
				<Text style={styles.oops}>No Records Found.</Text>
			</View>
		);
  }

  return (
    <FlatList
      data={displayedWorkRecords}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <WorkRecord
          title={itemData.item.title}
          onSelect={() => {
            seeDetailsHandler(itemData.item.id, itemData.item.title);
          }}
        >
          <Button
            title="View Details"
            style={(fontSize = "30")}
            color={Colors.primary}
            onPress={() => {
              seeDetailsHandler(itemData.item.id, itemData.item.title);
            }}
          />
          <Button
            title="Delete"
            style={(fontSize = "30")}
            color={Colors.primary}
            onPress={() => {
              deleteHandler(itemData.item.id);
            }}
          />
        </WorkRecord>
      )}
    />
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
		justifyContent: 'center',
		alignItems: "center",
		fontWeight: "bold",
	},
	oops: {
		fontWeight: "bold",
		fontSize: 20,
	},
});

export default WorkRecordsScreen;