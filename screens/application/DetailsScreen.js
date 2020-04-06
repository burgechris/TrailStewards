import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Platform, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const WorkRecordDetailsScreen = props => {
  const workRecordId = props.navigation.getParam('workRecordId');
  const selectedWorkRecord = useSelector(state => state.workRecords.workRecords.find(wr => wr.id === workRecordId));

  return (
		<ScrollView style={styles.screen}>
			<Text>Title: {selectedWorkRecord.title}</Text>
			<Text>Hours: {selectedWorkRecord.hours}</Text>
			<Text>Number of volunteers: {selectedWorkRecord.volunteers}</Text>
			<Text>Miles built/maintained: {selectedWorkRecord.miles}</Text>
			<Text>Land Manager: {selectedWorkRecord.landManager}</Text>
			<Text>Trail Name: {selectedWorkRecord.trailName}</Text>
			<Text>Region: {selectedWorkRecord.region}</Text>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 20
  }
});

export default WorkRecordDetailsScreen;