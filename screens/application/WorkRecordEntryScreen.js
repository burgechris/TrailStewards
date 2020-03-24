import React, { useState, useEffect, useCallback } from "react";
import {
	View,
	StyleSheet,
	ScrollView,
	Button,
	TouchableWithoutFeedback,
	Keyboard, 
	Alert
} from "react-native";
import { useDispatch } from "react-redux";

import Picker from "../../components/Picker";
import Input from "../../components/Input";
import * as recordActions from "../../store/actions/workRecords";

const WorkRecordEntryScreen = props => {
	const [memberGroupId, setMemberGroupId] = useState("");
	const [title, setTitle] = useState("");
	const [titleIsValid, setTitleIsValid] = useState(false);
	const [hours, setHours] = useState("");
	const [volunteers, setVolunteers] = useState("");
	const [landManager, setLandManager] = useState("");
	const [trailName, setTrailName] = useState("");
	const [region, setRegion] = useState("");
	const [miles, setMiles] = useState("");

	const placeholder = { label: "Select a Member Group...", value: null };

	const dispatch = useDispatch();

	const submitHandler = useCallback(() => {
		if (!titleIsValid) {
			Alert.alert('Wrong Input', 'Please check the errors in the form', [{text: 'OK'}])
			return;
		}
		dispatch(
			recordActions.createRecord(
				memberGroupId,
				title,
				hours,
				volunteers,
				landManager,
				trailName,
				region,
				miles
			)
		);
		props.navigation.goBack();
	});

	// useEffect(() => {
	// 	props.navigation.setParams({ submit: submitHandler });
	// }, [submitHandler]);

	const inputChangeHandler = text => {
		if (text.trim().length === 0) {
			setTitleIsValid(false);
		} else {
			setTitleIsValid(true);
		}
		setTitle(text);
	};

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<ScrollView>
				<View style={styles.screen}>
					<Picker
						placeholder={placeholder}
						value={memberGroupId}
						onValueChange={value => setMemberGroupId(value)}
						items={[
							{ label: "Northwest Trail Alliance", value: "m1" },
							{ label: "Central Oregon Trail Alliance", value: "m2" },
							{ label: "Salem Area Trail Alliance", value: "m3" },
							{ label: "Oregon Timber Trail Alliance", value: "m4" },
							{ label: "Hood River Area Trail Stewards", value: "m5" },
							{ label: "Rogue Valley Mountain Bike Association", value: "m6" },
							{ label: "Trans-Cascadia", value: "m7" },
							{ label: "Alpine Trail Crew Association", value: "m8" },
							{ label: "Greater Oakridge Area Trail Stewards", value: "m9" },
							{ label: "Team Dirt", value: "m10" }
						]}
					/>
					<Input
						id="title"
						label="Entry Title"
						blurOnSubmit={false}
						value={title}
						onChangeText={inputChangeHandler}
						autoCapitalize='words'
					/>
					<Input
						id="hours"
						label="Hours"
						blurOnSubmit={false}
						value={hours}
						onChangeText={setHours}
						keyboardType='decimal-pad'
					/>
					<Input
						id="volunteers"
						label="Number of Volunteers"
						value={volunteers}
						onChangeText={setVolunteers}
						keyboardType='numeric'
					/>
					<Input
						id="landManager"
						label="Land Manager"
						value={landManager}
						onChangeText={setLandManager}
						autoCapitalize='words'
					/>
					<Input
						id="trailName"
						label="Trail Name"
						value={trailName}
						onChangeText={setTrailName}
						autoCapitalize='words'
					/>
					<Input
						id="region"
						label="Region"
						value={region}
						onChangeText={setRegion}
						autoCapitalize='words'
					/>
					<Input
						id="miles"
						label="Miles"
						keyboardType="numeric"
						value={miles}
						onChangeText={setMiles}
						keyboardType='decimal-pad'
					/>
				</View>
				<View style={styles.buttonContainer}>
					<Button title="Submit" onPress={submitHandler} />
					<Button
						title="Cancel"
						onPress={() => {
							props.navigation.goBack();
						}}
					/>
				</View>
			</ScrollView>
		</TouchableWithoutFeedback>
	);
};

WorkRecordEntryScreen.navigationOptions = {
	headerTitle: "Add Record"
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		margin: 20
	},
	// picker: {
	// 	flex: 0.5,
	// 	padding: 20,
	// 	width: 300,
	// 	height: 20,
	// 	marginTop: -10
	// },
	// input: {
	// 	width: "80%",
	// 	borderBottomColor: "black",
	// 	borderBottomWidth: 1,
	// 	padding: 5
	// },
	buttonContainer: {
		paddingTop: 20,
		flexDirection: "row",
		justifyContent: "space-around"
	}
});

export default WorkRecordEntryScreen;
