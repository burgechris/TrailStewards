import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/application/HomeScreen';
import WorkRecordsScreen from '../screens/application/WorkRecordsScreen';
import WorkRecordDetailsScreen from '../screens/application/WorkRecordDetailsScreen';
import WorkRecordEntryScreen from '../screens/application/WorkRecordEntryScreen';
import Colors from '../constants/colors';

const RecordsNavigator = createStackNavigator(
  {
  HomeScreen: HomeScreen,
  WorkRecords: WorkRecordsScreen,
  NewWorkRecord: WorkRecordEntryScreen
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