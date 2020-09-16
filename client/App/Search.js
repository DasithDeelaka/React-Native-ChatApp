import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ScreenContainer = ({ children }) => (
  	<View style={styles.container}>{children}</View>
);

export const Search = ({ navigation }) => (
	<ScreenContainer>
		<Text>Search Screen</Text>
		<Button title="Search 2" onPress={() => navigation.push("Search2")} />
		<Button
			title="React Native School"
			onPress={() => {
				navigation.navigate("Home", {
				screen: "Details",
				params: { name: "React Native School" }
				});
			}}
		/>
	</ScreenContainer>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
});