import React, { useState, useEffect, useCallback } from 'react';
import { 
  View, 
  StyleSheet, 
  ScrollView,
  Button,
  TouchableWithoutFeedback,
  Keyboard
 } from 'react-native';
 import { Switch, Router, Route } from 'react-router-native';
 import { useDispatch } from 'react-redux';

import Input from '../../components/Input';
import WorkRecordsScreen from './WorkRecordsScreen';
import * as recordActions from '../../store/actions/workRecords'

const WorkRecordEntryScreen = props => {
  const [title, setTitle] = useState('');
  const [hours, setHours] = useState('');
  const [club, setClub] = useState('');
  const [landManager, setLandManager] = useState('');
  const [trailName, setTrailName] = useState('');
  const [region, setRegion] = useState('');
  const [miles, setMiles] = useState('');
  
  const dispatch = useDispatch();
  const submitHandler = () => {
     dispatch(recordActions.createRecord(title, hours, club, landManager, trailName, region, miles));
     props.navigation.goBack();
  };
  

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ScrollView>
        <View style={styles.screen}>
          <Input 
            id='title'
            label='Entry Title'
            value={title} 
            onChangeText={setTitle}
            />
          <Input
            id='hours'
            label='Hours'
            value={hours} 
            onChangeText={setHours}
            />
          <Input
            id='club'
            label='Club/Member Organization'
            value={club} 
            onChangeText={setClub}
            />
          <Input
            id='landManager'
            label='Land Manager'
            value={landManager} 
            onChangeText={setLandManager}
            />
          <Input
            id='trailName'
            label='Trail Name'
            value={trailName} 
            onChangeText={setTrailName}
            />
          <Input
            id='region'
            label='Region'
            value={region} 
            onChangeText={setRegion}
            />
          <Input
            id='miles'
            label='Miles'
            keyboardType='numeric'
            value={miles} 
            onChangeText={setMiles}
          />
          <View style={styles.buttonContainer}>
            <Button title='Submit' onPress={submitHandler} />
            <Button title='Cancel' onPress={() => {
              props.navigation.goBack();
            }} />
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

WorkRecordEntryScreen.navigationOptions = {
  headerTitle: "Add Record"
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20
  },
  // input: {
  //   width: '80%',
  //   borderBottomColor: 'black',
  //   borderBottomWidth: 1,
  //   padding: 5,
  // },
  buttonContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default WorkRecordEntryScreen;