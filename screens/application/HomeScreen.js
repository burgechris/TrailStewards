import React from 'react';
import { View, StyleSheet, Button, ImageBackground } from 'react-native';

import Card from '../../components/Card';

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
            <Button title="MEMBER GROUPS" onPress={() => {
              props.navigation.navigate({ routeName: 'MemberGroups' })
            }} />
          </Card>
          {/* <Card>
          <Button title="VIEW ALL RECORDS" onPress={() => {
            props.navigation.navigate({routeName: 'WorkRecords'})
          }} />
          </Card> */}
      </View>
    </ImageBackground>
  );
};

HomeScreen.navigationOptions = {
  headerTitle: 'Trail Stewards',
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