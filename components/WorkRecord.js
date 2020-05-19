import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';

import Card from './Card'

const WorkRecord = props => {
  let TouchableCmp = TouchableOpacity;

	if (Platform.OS === "android" && Platform.Version >= 21) {
		TouchableCmp = TouchableNativeFeedback;
  }
  
  return (
		<Card style={styles.record}>
			<View style={styles.touchable}>
				<TouchableCmp onPress={props.onSelect}>
					<View>
						<View style={styles.details}>
							<Text style={styles.title}>{props.title}</Text>
						</View>
						<View style={styles.actions}>
              {props.children}
            </View>
					</View>
				</TouchableCmp>
			</View>
		</Card>
	);
}; 

const styles = StyleSheet.create({
	record: {
		height: 100,
		margin: 20,
	},
	touchable: {
		borderRadius: 10,
		overflow: "hidden",
	},
	details: {
		alignItems: "center",
		height: "50%",
		padding: 10,
	},
	title: {
		// fontFamily: 'open-sans-bold',
		fontSize: 18,
		marginVertical: 2,
	},
	actions: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: "50%",
		paddingHorizontal: 10,
	},
});

export default WorkRecord;