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
        <Text style={styles.club}>{props.club}</Text>
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
    fontWeight: 'bold',
    // fontFamily: 'open-sans-bold',
    fontSize: 18,
    marginVertical: 2
  },
  club: {
    fontWeight: 'bold',
    // fontFamily: 'open-sans',
    fontSize: 14,
    color: '#888'
  }
});

export default WorkRecord;