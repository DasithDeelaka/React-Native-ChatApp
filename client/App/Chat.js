import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Icon } from 'react-native-elements';

import { AuthContext } from "./context";
import { Loading } from './Loading';

const ScreenContainer = ({ children }) => (
  	<View style={styles.container}>{children}</View>
);

export const Chat = ({ navigation }) => {
	const { signOut } = React.useContext(AuthContext);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		setTimeout(() => {
		setIsLoading(false);
		}, 1500);
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<ScreenContainer>
			<Text>Chat Screen</Text>
			<Button
				title=" Sign Out"
				color="red"
				onPress={() => signOut()}
				icon={ <Icon name='sign-out' type='font-awesome' size={24} color= 'white' /> }
				buttonStyle={{ backgroundColor: "red" }}
				style={{margin: 20}}
			/>
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