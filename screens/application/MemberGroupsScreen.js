import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { MEMBERGROUPS } from '../../data/dummyData';
import Tile from '../../components/Tile';

const MemberGroupsScreen = props => {
  const renderGridTile = itemData => {
    return (
      <View style={styles.screen}>
      <Tile
        name={itemData.item.name}
        image={itemData.item.image}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'WorkRecords',
            params: {
              memberGroupId: itemData.item.id
            }
          });
        }}
      />
      </View>
    );
  };

  return (
    <FlatList 
      keyExtractor={(item, index) => item.id}
      data={MEMBERGROUPS}
      renderItem={renderGridTile}
      // numColumns={2}
    />
  );
};

MemberGroupsScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Member Groups'
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MemberGroupsScreen;

