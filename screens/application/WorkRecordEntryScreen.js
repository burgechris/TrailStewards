import React, { useState, useEffect, useCallback, useReducer } from "react";
import {
	View,
	StyleSheet,
	ScrollView,
	Button,
	TouchableWithoutFeedback,
	Keyboard, 
	KeyboardAvoidingView,
	Alert
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Picker from "../../components/Picker";
import Input from "../../components/Input";
import * as recordActions from "../../store/actions/workRecords";

const formReducer = (state, action) => {
	if (action.type === 'CREATE_RECORD') {

	}
};

const WorkRecordEntryScreen = props => {
	const workRecordId = props.navigation.getParam("workRecordId");
	const editedWorkRecord = useSelector(state =>
		state.workRecords.availableWorkRecords.find(wr => wr.id === workRecordId)
	);

	const [memberGroupId, setMemberGroupId] = useState(editedWorkRecord ? editedWorkRecord.memberGroupId : '');
	const [title, setTitle] = useState(editedWorkRecord ? editedWorkRecord.title : '');
	const [titleIsValid, setTitleIsValid] = useState(false);
	const [hours, setHours] = useState(editedWorkRecord ? editedWorkRecord.hours : '');
	const [volunteers, setVolunteers] = useState(editedWorkRecord ? editedWorkRecord.volunteers : '');
	const [landManager, setLandManager] = useState(editedWorkRecord ? editedWorkRecord.landManager : '');
	const [trailName, setTrailName] = useState(editedWorkRecord ? editedWorkRecord.trailName : '');
	const [region, setRegion] = useState(editedWorkRecord ? editedWorkRecord.region : '');
	const [miles, setMiles] = useState(editedWorkRecord ? editedWorkRecord.miles : '');

	const placeholder = { label: "Select a Member Group...", value: null };

	const dispatch = useDispatch();

	// useReducer(formReducer, {
	// 	inputValues: {}
	// });

	const submitHandler = useCallback(() => {
		if (!titleIsValid) {
			Alert.alert('Wrong Input', 'Please check the errors in the form', [{text: 'OK'}])
			return;
		}
		if (editedWorkRecord) {
			dispatch(
				recordActions.updateRecord(
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
		} else {
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
			}
		props.navigation.goBack();
	}, [dispatch, 
			memberGroupId,
			title,
			hours,
			volunteers,
			landManager,
			trailName,
			region,
			miles,
			titleIsValid]);

	useEffect(() => {
		props.navigation.setParams({ submit: submitHandler });
	}, [submitHandler]);

	const textChangeHandler = text => {
		if (text.trim().length === 0) {
			setTitleIsValid(false);
		} else {
			setTitleIsValid(true);
		}
		setTitle(text);
	};

	return (
		<KeyboardAvoidingView
			style={{ flex: 1}}
			behavior="padding"
			keyboardVerticalOffset={100}
		>
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
								{
									label: "Rogue Valley Mountain Bike Association",
									value: "m6"
								},
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
							onChangeText={textChangeHandler}
							autoCapitalize="words"
						/>
						<Input
							id="hours"
							label="Hours"
							blurOnSubmit={false}
							value={hours}
							onChangeText={setHours}
							keyboardType="decimal-pad"
						/>
						<Input
							id="volunteers"
							label="Number of Volunteers"
							value={volunteers}
							onChangeText={setVolunteers}
							keyboardType="numeric"
						/>
						<Input
							id="landManager"
							label="Land Manager"
							value={landManager}
							onChangeText={setLandManager}
							autoCapitalize="words"
						/>
						<Input
							id="trailName"
							label="Trail Name"
							value={trailName}
							onChangeText={setTrailName}
							autoCapitalize="words"
						/>
						<Input
							id="region"
							label="Region"
							value={region}
							onChangeText={setRegion}
							autoCapitalize="words"
						/>
						<Input
							id="miles"
							label="Miles Reclaimed"
							keyboardType="numeric"
							value={miles}
							onChangeText={setMiles}
							keyboardType="decimal-pad"
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
		</KeyboardAvoidingView>
	);
};

WorkRecordEntryScreen.navigationOptions = navData => {
	return {
		headerTitle: navData.navigation.getParam('workRecordId')
			? 'Edit Work Record'
			: 'Add Work Record',
	};
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		margin: 20
	},
	buttonContainer: {
		paddingTop: 20,
		flexDirection: "row",
		justifyContent: "space-around"
	}
});

export default WorkRecordEntryScreen;
