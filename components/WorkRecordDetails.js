import React from 'react';
import { Text, View, StyleSheet, Button, Modal } from 'react-native';

const WorkRecordDetails = props => {

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.container} >
        <Text>{props.title}</Text>
        <Button title='Cancel' onPress={props.onCancel} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default WorkRecordDetails;