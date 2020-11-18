import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const Splash = () => (
	<View style={styles.container}>
		<Image style={styles.stretch} source={require('../assets/splash.png')} />
		<Text style={styles.loadingText}>ChatApp</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	loadingText: {
		color: '#2979FF',
		fontSize: 30,
		fontWeight: 'bold',
		marginTop:-110
	},
	stretch: {
		width: 300,
		height: 300,
		marginTop:-100
	}
});