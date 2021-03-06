import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

type ButtonProps = {
	icon: string;
	title: string;
	screenName: string;

	color?: string;
};

export function Button(props: ButtonProps) {
	// @todo: Add proper type
	const navigation = useNavigation<any>();

	return (
		<View style={styles.root}>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate(props.screenName);
				}}
				disabled={!props.screenName}
				style={{ ...styles.button, backgroundColor: props.color ?? '#0470DC' }}
			>
				<FontAwesome name={props.icon} size={25} color="#efefef" />
			</TouchableOpacity>
			<Text style={styles.buttonText}>{props.title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		alignItems: 'center',
		flex: 1,
	},
	button: {
		width: 50,
		height: 50,
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		color: '#858585',
		fontSize: 12,
		paddingTop: 10,
		fontWeight: '700',
	},
});
