import React from 'react';
import { 
  View, 
  TextInput, 
  StyleSheet, 
  Button,
  TouchableWithoutFeedback,
  Keyboard
 } from 'react-native';

const InputScreen = props => {
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
          // value={} //State
          />
        <TextInput
          placeholder='Hours'
          style={styles.input}
          // value={} //State
          />
        <TextInput
          placeholder='Club/Member Organization'
          style={styles.input}
          // value={} //State
          />
        <TextInput
          placeholder='Land Manager'
          style={styles.input}
          // value={} //State
          />
        <TextInput
          placeholder='Trail Name'
          style={styles.input}
          // value={} //State
          />
        <TextInput
          placeholder='Region'
          style={styles.input}
          // value={} //State
          />
        <TextInput
        placeholder='Miles'
        keyboardType='numeric'
        style={styles.input}
        // value={} //State
        />
        <View style={styles.buttonContainer}>
          <Button title='Submit' />
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

export default InputScreen;