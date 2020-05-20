import React from 'react';
import { View, Text, Platform, Button, StyleSheet, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/Card';
import Colors from '../../constants/colors';
import HeaderButton from '../../components/HeaderButton';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const WorkRecordDetailsScreen = props => {
  const workRecordId = props.navigation.getParam('workRecordId');
	const selectedWorkRecord = useSelector((state) =>
		state.workRecords.availableWorkRecords.find((wr) => wr.id === workRecordId)
	);

	const dispatch = useDispatch();

	const editWorkRecordHandler = (id) => {
		props.navigation.navigate("NewWorkRecord", { workRecordId: id });
	};


  return (
		<View style={styles.screen}>
			<Card style={styles.card}>
				<Text>Trail Name: {selectedWorkRecord.trailName}</Text>
				<Text>Hours: {selectedWorkRecord.hours}</Text>
				<Text>Number of volunteers: {selectedWorkRecord.volunteers}</Text>
				<Text>Miles built/maintained: {selectedWorkRecord.miles}</Text>
				<Text>Land Manager: {selectedWorkRecord.landManager}</Text>
				<Text>Region: {selectedWorkRecord.region}</Text>
				<Button
					title="Edit"
					style={styles.editBtn}
					color={Colors.primary}
					onPress={() => {
						editWorkRecordHandler(selectedWorkRecord.id);
					}}
				/>
			</Card>
		</View>
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
		justifyContent: "flex-start",
		alignItems: "center",
	},
	card: {
		height: 200,
		margin: 60,
		width: "80%",
		justifyContent: "space-around",
		alignItems: "center",
	},
	editBtn: {
		fontSize: 30,
		paddingRight: "10px",
	},
	name: {
		justifyContent: 'space-around'
	}
	// details: {
	// 	justifyContent: "space-between",
	// 	alignItems: "center",
	// 	padding: 10,
	// },
});

export default WorkRecordDetailsScreen;