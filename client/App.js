import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Splash } from './components/SplashComponent';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	// Splash Screen with 1.5 seconds timeout when the app is being opened
	const [timePassed, setTime] = useState(false);
	setTimeout(() => {setTime(true)}, 1500);
	if (!timePassed){
		return (
			<Splash />
		);
	} else {
		return (
			<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar style="auto" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	}
});
