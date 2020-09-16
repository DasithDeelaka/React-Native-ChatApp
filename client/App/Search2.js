import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ScreenContainer = ({ children }) => (
  	<View style={styles.container}>{children}</View>
);

export const Search2 = () => (
	<ScreenContainer>
		<Text>Search2 Screen</Text>
	</ScreenContainer>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
});