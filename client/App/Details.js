import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ScreenContainer = ({ children }) => (
  	<View style={styles.container}>{children}</View>
);

export const Details = ({ route }) => (
	<ScreenContainer>
		<Text>Details Screen</Text>
		{route.params.name && <Text>{route.params.name}</Text>}
	</ScreenContainer>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
});