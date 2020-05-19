import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native';

const Tile = props => {
  return (
    <View style={styles.tile} >
      <TouchableOpacity style={{ flex: 1 }} onPress={props.onSelect}>
        <View style={{...styles.container, ...{backgroundColor: props.image}}}>
          <Text style={styles.name} numberOfLines={2} >{props.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    margin: 15,
    width: '90%',
    height: 50,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 1, height: 5 },
    shadowRadius: 10,
    elevation: 3,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontWeight: 'bold'
  }
});

export default Tile;