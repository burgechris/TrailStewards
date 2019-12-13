import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from '../screens/application/HomeScreen';
import WorkRecordsScreen from '../screens/application/WorkRecordsScreen';
import WorkRecordEntryScreen from '../screens/application/WorkRecordEntryScreen';

const RecordsNavigator = createStackNavigator({
  HomeScreen: HomeScreen,
  WorkRecords: WorkRecordsScreen,
  NewWorkRecord: WorkRecordEntryScreen
});

export default createAppContainer(RecordsNavigator);