import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Platform, Button, StyleSheet, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/colors';
import * as workRecordActions from  '../../store/actions/workRecords';
import HeaderButton from '../../components/HeaderButton';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const WorkRecordDetailsScreen = props => {
  const workRecordId = props.navigation.getParam('workRecordId');
	const selectedWorkRecord = useSelector((state) =>
		state.workRecords.availableWorkRecords.find((wr) => wr.id === workRecordId)
	);
	const editWorkRecordHandler = (id) => {
		props.navigation.navigate("NewWorkRecord", { workRecordId: id });
	};

  return (
		<ScrollView style={styles.screen}>
			<Text>Hours: {selectedWorkRecord.hours}</Text>
			<Text>Number of volunteers: {selectedWorkRecord.volunteers}</Text>
			<Text>Miles built/maintained: {selectedWorkRecord.miles}</Text>
			<Text>Land Manager: {selectedWorkRecord.landManager}</Text>
			<Text>Trail Name: {selectedWorkRecord.trailName}</Text>
			<Text>Region: {selectedWorkRecord.region}</Text>
			<Button
				title="Edit"
				style={(fontSize = "30")}
				color={Colors.primary}
				onPress={() => {
					editWorkRecordHandler(selectedWorkRecord.id);
				}}
			/>
		</ScrollView>
	);
};

WorkRecordDetailsScreen.navigationOptions = navData => {
	
	return {
		headerTitle: navData.navigation.getParam("workRecordTitle"),
		// headerRight: (
		// 	<View>
		// 		data={selectedWorkRecord}
		// 		keyExtractor={item => item.id}
		// 		renderItem={itemData => 
		// 			<Button
		// 				title="Edit"
		// 				style={(fontSize = "30")}
		// 				color={Colors.primary}
		// 				onPress={() => {
		// 					editWorkRecordHandler(itemData.item.id);
		// 				}}
		// 			/>
		// 		}
		// 	</View>
		// ),
	};
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 20
	},
	editBtn: {
		 fontSize: 30,
		 paddingRight: '10px'
	}
});

export default WorkRecordDetailsScreen;