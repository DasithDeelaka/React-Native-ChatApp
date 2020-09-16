import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import { AuthContext } from "./context";

const ScreenContainer = ({ children }) => (
  	<View style={styles.container}>{children}</View>
);

export const SignIn = ({ navigation }) => {
  	const { signIn } = React.useContext(AuthContext);

	return (
		<ScreenContainer>
			<Text>Sign In Screen</Text>
			<Button title="Sign In" onPress={() => signIn()} />
			{/* <Button
				title="Create Account"
				onPress={() => navigation.push("CreateAccount")}
			/> */}
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