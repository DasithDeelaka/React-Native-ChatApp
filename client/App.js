import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Splash } from './components/SplashComponent';
import { Home } from './components/HomeComponent';
import { Details } from './components/DetailsComponent';

function HomeScreen() {
	return (
		<Home />
	);
}

function DetailsScreen() {
	return (
		<Details />
	);
}

const Stack = createStackNavigator();

export default function App() {

	// Splash Screen with 1.5 seconds timeout
	const [timePassed, setTime] = useState(false);
	setTimeout(() => {setTime(true)}, 1500);
	if (!timePassed){
		return (
			<Splash />
		);
	} else {
		return (
			<NavigationContainer>
				<Stack.Navigator  initialRouteName="Home">
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="Details" component={DetailsScreen} />
				</Stack.Navigator>
			</NavigationContainer>
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