import React from 'react';
import { View, FlatList, Platform, Button, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import WorkRecord from '../../components/WorkRecord';
import RecordData from '../../data/dummyData'
import WorkRecordEntryScreen from './WorkRecordEntryScreen';

const WorkRecordsScreen = props => {
  // const workRecords = useSelector(state => state.workRecords.workRecords);

  return(
    <View style={styles.screen}>
        <FlatList 
          data={RecordData} 
          keyExtractor={item => item.id}
          renderItem={itemData => (
            <WorkRecord
              title={itemData.item.title}
              club={itemData.item.club}
            />
          )}
        /> 
    </View>
  );
};

// WorkRecordsScreen.navigationOptions = navData => {
//   return {
//     headerTitle: 'All Records',
//     headerRight: (
//       <HeaderButtons>
//         <Item
//           title="Add"
//           iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
//           onPress={() => {
//             navData.navigation.navigate('NewWorkRecord');
//           }}
//         />
//       </HeaderButtons>
//     )
//   }
// }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default WorkRecordsScreen;