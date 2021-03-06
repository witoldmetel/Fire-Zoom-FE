import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';

export function SearchBar() {
	return (
		<View style={styles.root}>
			<Fontisto name="search" size={20} color="#858585" />
			<Text style={styles.textIntput}>Search</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		backgroundColor: '#333',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10,
		height: 40,
		borderRadius: 15,
	},
	textIntput: {
		color: '#858585',
		paddingLeft: 10,
		fontSize: 20,
	},
});
