import React, { useState, useEffect, useCallback } from 'react';
import { 
  View, 
  TextInput, 
  StyleSheet, 
  Button,
  TouchableWithoutFeedback,
  Keyboard
 } from 'react-native';
 import { useDispatch } from 'react-redux';

import * as recordActions from '../../store/actions/workRecords'

const WorkRecordEntryScreen = props => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [hours, setHours] = useState('');
  const [club, setClub] = useState('');
  const [landManager, setLandManager] = useState('');
  const [trailName, setTrailName] = useState('');
  const [region, setRegion] = useState('');
  const [miles, setMiles] = useState('');

  const submitHandler = useCallback(() => {
     dispatch(recordActions.createRecord(title, hours, club, landManager, trailName, region, miles))
  }, [dispatch, title, hours, club, landManager, trailName, region, miles],
  );

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <TextInput 
          placeholder='Entry Title'
          style={styles.input}
          value={title} 
          onChangeText={setTitle}
          />
        <TextInput
          placeholder='Hours'
          style={styles.input}
          value={hours} 
          onChangeText={setHours}
          />
        <TextInput
          placeholder='Club/Member Organization'
          style={styles.input}
          value={club} 
          onChangeText={setClub}
          />
        <TextInput
          placeholder='Land Manager'
          style={styles.input}
          value={landManager} 
          onChangeText={setLandManager}
          />
        <TextInput
          placeholder='Trail Name'
          style={styles.input}
          value={trailName} 
          onChangeText={setTrailName}
          />
        <TextInput
          placeholder='Region'
          style={styles.input}
          value={region} 
          onChangeText={setRegion}
          />
        <TextInput
        placeholder='Miles'
        keyboardType='numeric'
        style={styles.input}
        value={miles} 
        onChangeText={setMiles}
        />
        <View style={styles.buttonContainer}>
          <Button title='Submit' onPress={submitHandler} />
          <Button title='Cancel' onPress={props.onCancel} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default WorkRecordEntryScreen;