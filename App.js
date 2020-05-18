import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import{ enableScreens } from 'react-native-screens';
import ReduxThunk from 'redux-thunk';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { MaterialCommunityIcons } from "@expo/vector-icons"; 

import workRecordsReducer from './store/reducers/workRecords';
import RecordsNavigator from './navigator/RecordsNavigator';

enableScreens();

const rootReducer= combineReducers({
  workRecords: workRecordsReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
	return Font.loadAsync({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    ...MaterialCommunityIcons.font
	});
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => {
					setFontLoaded(true);
				}}
			/>
		);
  }
  
  return (
    <Provider store={store}>
      <View style={styles.screen}>
        <RecordsNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});  
