import React, { useState } from 'react';
import { View, StyleSheet, Button, ImageBackground } from 'react-native';

import Card from '../../components/Card';
import Header from '../../components/Header';
import WorkRecordsScreen from './WorkRecordsScreen';

const HomeScreen = props => {
  return (
    <ImageBackground
    source={require('../../assets/topo.jpg')}
    style={styles.image}
    resizeMode='cover'
    >
      <View style={styles.screen}>
          <Card>
          <Button title="NEW ENTRY" onPress={() => {
            props.navigation.navigate({routeName: 'NewWorkRecord'})
          }}/>
          </Card>
          <Card>
          <Button title="VIEW RECORDS" onPress={() => {}} />
          </Card>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: '60%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center'
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
});

export default HomeScreen;