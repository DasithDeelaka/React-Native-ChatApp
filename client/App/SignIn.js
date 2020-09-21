import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Image, Text, AsyncStorage } from "react-native";
import { Icon, Input, CheckBox, Button } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';

import { AuthContext } from "./context";
import { Loading } from './Loading';

const ScreenContainer = ({ children }) => (
  	<View style={styles.container}>{children}</View>
);

export function SignIn ({ navigation }) {
	const { signIn } = React.useContext(AuthContext);
	const [isLoading, setIsLoading] = useState(true);
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	const [remember, setRemember] = useState(false);

	const save = async () => {
		try {
			await SecureStore.setItemAsync("username", username);
			await SecureStore.setItemAsync("password", password);
		} catch (err) {
			alert (err);
		}
	}

	const load = async () => {
		try {
			let username = await SecureStore.getItemAsync("username");
			let password = await SecureStore.getItemAsync("password");

			if (username !== null && password !== null) {
				setUsername(username);
				setPassword(password);
			}
		} catch (err) {
			alert (err);
		}
	}

	// const remove = async () => {
	// 	try {
	// 		await SecureStore.deleteItemAsync("username");
	// 		await SecureStore.deleteItemAsync("password");
	// 	} catch (err) {
	// 		alert (err);
	// 	} finally {
	// 		setUsername("");
	// 		setPassword("");
	// 	}
	// }

	React.useEffect(() => {
		load();
		setTimeout(() => {
		setIsLoading(false);
		}, 1500);
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<ScreenContainer>
			<ScrollView>
				<View style={styles.container}>
					<Image style={styles.stretch} source={require('../assets/splash.png')} />
					<Input
						placeholder="Username"
						leftIcon={{ type: 'font-awesome', name: 'user-o' }}
						onChangeText={(username) => setUsername(username)}
						value={username}
						containerStyle={styles.formInput}
					/>
					<Input
						placeholder="Password"
						secureTextEntry={true}
						leftIcon={{ type: 'font-awesome', name: 'key' }}
						onChangeText={(password) => setPassword(password)}
						value={password}
						containerStyle={styles.formInput}
					/>
					<CheckBox title="Remember Me"
						center
						checked={remember}
						onPress={() => {
							setRemember(!remember);
							if(remember === false) {
								save();
							}
						}}
						containerStyle={styles.formCheckbox}
					/>
					<View style={styles.formButton}>
						{/* <Button
							title=" Remove Me"
							onPress={() => remove()}
							buttonStyle={{ backgroundColor: "red" }}
						/> */}
						<Button
							title=" Sign In"
							onPress={() => signIn()}
							icon={ <Icon name='sign-in' type='font-awesome' size={24} color= 'white' />}
							buttonStyle={{ backgroundColor: "#2979FF" }}
						/>
					</View>
				</View>
            </ScrollView>
		</ScreenContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		margin: 20
	},
    formInput: {
    },
    formCheckbox: {
        margin: 20,
        backgroundColor: null
    },
    formButton: {
		marginBottom: 20,
		marginTop: 20,
		marginLeft: 75,
		marginRight: 75
	},
	stretch: {
		width: 300,
		height: 100
	}
});