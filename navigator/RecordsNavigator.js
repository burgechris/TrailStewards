import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/application/HomeScreen';
import MemberGroupsScreen from '../screens/application/MemberGroupsScreen';
import WorkRecordsScreen from '../screens/application/WorkRecordsScreen';
import WorkRecordEntryScreen from '../screens/application/WorkRecordEntryScreen';
import DetailsScreen from '../screens/application/DetailsScreen';
import Colors from '../constants/colors';

const RecordsNavigator = createStackNavigator(
  {
  HomeScreen: HomeScreen,
  MemberGroups: MemberGroupsScreen,
  WorkRecords: WorkRecordsScreen,
  NewWorkRecord: WorkRecordEntryScreen,
  WorkRecordDetails: DetailsScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primary,
    }
  }
);

export default createAppContainer(RecordsNavigator);