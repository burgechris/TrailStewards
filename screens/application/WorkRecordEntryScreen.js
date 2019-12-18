import React, { useState, useEffect, useCallback } from 'react';
import { 
  View, 
  StyleSheet, 
  ScrollView,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
 } from 'react-native';
import { useDispatch } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';

import Input from '../../components/Input';
import * as recordActions from '../../store/actions/workRecords'

const WorkRecordEntryScreen = props => {
  const [memberGroupId, setMemberGroupId] = useState('');
  const [title, setTitle] = useState('');
  const [hours, setHours] = useState('');
  const [volunteers, setVolunteers] = useState('');
  const [landManager, setLandManager] = useState('');
  const [trailName, setTrailName] = useState('');
  const [region, setRegion] = useState('');
  const [miles, setMiles] = useState('');

  const placeholder= {label: 'Select a Member Group...', value: null}
  
  
  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(recordActions.createRecord(memberGroupId, title, hours, volunteers, landManager, trailName, region, miles));
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
            <RNPickerSelect
              placeholder={placeholder}
              value={memberGroupId}
              onValueChange={value => setMemberGroupId(value)}
              items={[
                { label: 'Northwest Trail Alliance', value: 'm1' },
                { label: 'Central Oregon Trail Alliance', value: 'm2' },
                { label: 'Salem Area Trail Alliance', value: 'm3' },
                { label: 'Oregon Timber Trail Alliance', value: 'm4' },
                { label: 'Hood River Area Trail Stewards', value: 'm5' },
                { label: 'Rogue Valley Mountain Bike Association', value: 'm6' },
                { label: 'Trans-Cascadia', value: 'm7' },
                { label: 'Alpine Trail Crew Association', value: 'm8' },
                { label: 'Greater Oakridge Area Trail Stewards', value: 'm9' },
                { label: 'Team Dirt', value: 'm10' }
              ]}
            />
          <Input 
            id='title'
            label='Entry Title'
            blurOnSubmit={ false }    
            value={title} 
            onChangeText={setTitle}
            />
          <Input
            id='hours'
            label='Hours'
            blurOnSubmit={false}
            value={hours} 
            onChangeText={setHours}
            />
          <Input
            id='volunteers'
            label='Number of Volunteers'
            value={volunteers}
            onChangeText={setVolunteers}
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
          </View>
          <View style={styles.buttonContainer}>
            <Button title='Submit' onPress={submitHandler} />
            <Button title='Cancel' onPress={() => {
              props.navigation.goBack();
            }} />
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20
  },
  // pickerContainer: {
  //   flex: 1,
  //   padding: 20
  // },
  picker: {
    flex: .5,
    padding: 20,
    width: 300,
    height: 20,
    marginTop: -10
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