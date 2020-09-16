import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import { AuthContext } from "./context";

const ScreenContainer = ({ children }) => (
  	<View style={styles.container}>{children}</View>
);

export const CreateAccount = () => {
  	const { signUp } = React.useContext(AuthContext);

	return (
		<ScreenContainer>
			<Text>Create Account Screen</Text>
			<Button title="Sign Up" onPress={() => signUp()} />
		</ScreenContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
});