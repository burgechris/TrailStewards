import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Platform, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const WorkRecordDetailsScreen = props => {
  const workRecordId = props.navigation.getParam('workRecordId');
  const selectedWorkRecord = useSelector(state => state.workRecords.workRecords.find(wr => wr.id === workRecordId));

  return (
    <ScrollView>
      <Text>{selectedWorkRecord.title}</Text>
    </ScrollView>
  );
};

export default WorkRecordDetailsScreen;