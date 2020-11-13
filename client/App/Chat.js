import React, { useContext, useState, useEffect} from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Button, Icon } from 'react-native-elements';

import { AuthContext } from "./context";
import { Loading } from './Loading';

const ScreenContainer = ({ children }) => (
  	<View style={styles.container}>{children}</View>
);

export const Chat = ({ navigation }) => {

	const { signOut, name, room } = useContext(AuthContext);
	const [isLoading, setIsLoading] = useState(true);

	const confirmSignOut = () => {
        Alert.alert(
            'Confirm Logout',
			'Are you sure you want to logout?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: () => {
                        signOut();
                    }
                }
            ],
            { cancelable: false }
        );
    }

	useEffect(() => {
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
			<Text>{name}</Text>
			<Text>{room}</Text>
			<Button
				title=" Sign Out"
				color="red"
				onPress={() => confirmSignOut()}
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