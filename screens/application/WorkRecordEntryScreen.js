import React, { useState, useEffect, useCallback } from 'react';
import { 
  View, 
  StyleSheet, 
  Button,
  TouchableWithoutFeedback,
  Keyboard
 } from 'react-native';
 import { useDispatch } from 'react-redux';

import Input from '../../components/Input';
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
      <ScrollView>
        <View style={styles.screen}>
          <Input 
            id='title'
            label='Entry Title'
            style={styles.input}
            value={title} 
            onChangeText={setTitle}
            />
          <Input
            id='hours'
            label='Hours'
            style={styles.input}
            value={hours} 
            onChangeText={setHours}
            />
          <Input
            id='club'
            label='Club/Member Organization'
            style={styles.input}
            value={club} 
            onChangeText={setClub}
            />
          <Input
            id='landManager'
            label='Land Manager'
            style={styles.input}
            value={landManager} 
            onChangeText={setLandManager}
            />
          <Input
            id='trailName'
            label='Trail Name'
            style={styles.input}
            value={trailName} 
            onChangeText={setTrailName}
            />
          <Input
            id='region'
            label='Region'
            style={styles.input}
            value={region} 
            onChangeText={setRegion}
            />
          <Input
            id='miles'
            label='Miles'
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
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 20
//   },
//   input: {
//     width: '80%',
//     borderBottomColor: 'black',
//     borderBottomWidth: 1,
//     padding: 5,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around'
//   }
// });

export default WorkRecordEntryScreen;