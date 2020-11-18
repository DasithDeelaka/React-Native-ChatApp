import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet, ScrollView, Image, Text } from "react-native";
import { Icon, Input, Button } from 'react-native-elements';

import { AuthContext } from "./context";
import { Loading } from './Loading';

const ScreenContainer = ({ children }) => (
  	<View style={styles.container}>{children}</View>
);

export function SignIn ({ navigation }) {

	const { signIn } = useContext(AuthContext);
	const [isLoading, setIsLoading] = useState(true);
	const [name, setName] = useState();

	const validate = () => {
		if(!name) {
			alert("Name cannot be empty!");
		} else {
			signIn(name);
		}
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
			<ScrollView>
				<View style={styles.logoView}>
					<Image style={styles.stretch} source={require('../assets/splash.png')} />
					<Text style={styles.text}>Welcome {name}</Text>
				</View>
				<View style={styles.container}>
					<Input
						placeholder="Name"
						leftIcon={{ type: 'font-awesome', name: 'user-o' }}
						onChangeText={(name) => setName(name)}
						value={name}
						containerStyle={styles.formInput}
					/>
					<View style={styles.formButton}>
						<Button
							title=" Sign In"
							onPress={() => validate()}
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
		marginLeft: 10,
		marginRight: 10,
		marginTop:40
	},
	logoView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
    formInput: {
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
	},
	text: {
		flex: 1,
		color: '#2979FF',
		fontSize: 25,
		fontWeight: 'bold'
	}
});