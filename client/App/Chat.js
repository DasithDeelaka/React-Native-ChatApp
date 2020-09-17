import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ScreenContainer = ({ children }) => (
  	<View style={styles.container}>{children}</View>
);

export const Chat = ({ navigation }) => (
	<ScreenContainer>
		<Text>Chat Screen</Text>
		{/* <Button title="Search" onPress={() => navigation.push("Search")} />
		<Button
			title="React Native School"
			onPress={() => {
				navigation.navigate("Home", {
				screen: "Details",
				params: { name: "React Native School" }
				});
			}}
		/> */}
	</ScreenContainer>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
});