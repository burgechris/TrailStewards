import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native';

import Card from './Card'

const WorkRecord = props => {
  return (
    <Card style={styles.record} >
      <View>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </Card>
  );
}; 

const styles = StyleSheet.create({
  record: {
    height: 100,
    margin: 20
  },
  title: {
    // fontFamily: 'open-sans-bold',
    fontSize: 18,
    marginVertical: 2
  },
  club: {
    // fontFamily: 'open-sans',
    fontSize: 14,
    color: '#888'
  }
});

export default WorkRecord;