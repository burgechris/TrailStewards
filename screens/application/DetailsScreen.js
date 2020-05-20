import React from 'react';
import { View, Text, Platform, Button, StyleSheet, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/Card';
import Colors from '../../constants/colors';
import HeaderButton from '../../components/HeaderButton';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { TouchableOpacity } from 'react-native-gesture-handler';

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
				<Text style={styles.name}>
					Trail Name: {selectedWorkRecord.trailName}
				</Text>
				<Text style={styles.details}>Hours: {selectedWorkRecord.hours}</Text>
				<Text style={styles.details}>
					Number of volunteers: {selectedWorkRecord.volunteers}
				</Text>
				<Text style={styles.details}>
					Miles built/maintained: {selectedWorkRecord.miles}
				</Text>
				<Text style={styles.details}>
					Land Manager: {selectedWorkRecord.landManager}
				</Text>
				<Text style={styles.details}>Region: {selectedWorkRecord.region}</Text>
				<View style={styles.btnContainer}>
					<Button
						title="Edit"
						// style={styles.btnCard}
						color={Colors.primary}
						onPress={() => {
							editWorkRecordHandler(selectedWorkRecord.id);
						}}
					/>
					<Button
						title="Back to Home"
						style={styles.btnText}
						color={Colors.primary}
						onPress={() => {
							props.navigation.popToTop();
						}}
					/>
				</View>
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
		height: 250,
		margin: 60,
		width: "80%",
		justifyContent: "space-around",
		alignItems: "center",
	},
	btnCard: {
		justifyContent: "center",
		alignContent: "center",
		height: 30,
		marginHorizontal: 20,
		marginVertical: 10,
	},
	btnText: {
		fontSize: 40,
		marginBottom: 10,
	},
	btnContainer: {
		marginVertical: 20,
		flexDirection: "row",
		justifyContent: "center",
		alignContent: 'space-around',
		alignItems: "center",
	},
	name: {
		fontSize: 20,
		color: "#888",
		textAlign: "center",
		marginVertical: 20,
	},
	details: {
		fontSize: 17,
		color: "#888",
		textAlign: "center",
		marginVertical: 10,
	},
});

export default WorkRecordDetailsScreen;