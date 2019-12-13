import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import WorkRecordsScreen from '../screens/application/WorkRecordsScreen';
import WorkRecordEntryScreen from '../screens/application/WorkRecordEntryScreen';
import Splash from '../screens/application/Splash';
import Colors from '../constants/colors';


const RecordsNavigator = createStackNavigator (
  {
    Splash: Splash,
    WorkRecords: WorkRecordsScreen,
    NewWorkRecord: WorkRecordEntryScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
  }
);

export default createAppContainer(RecordsNavigator);