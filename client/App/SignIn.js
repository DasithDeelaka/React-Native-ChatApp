import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { Icon, Input, CheckBox, Button } from 'react-native-elements';

import { AuthContext } from "./context";
import { Loading } from './Loading';

const ScreenContainer = ({ children }) => (
  	<View style={styles.container}>{children}</View>
);

export const SignIn = ({ navigation }) => {
	const { signIn } = React.useContext(AuthContext);
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
			<ScrollView>
				<View style={styles.container}>
					<Image style={styles.stretch} source={require('../assets/splash.png')} />
					<Input
						placeholder="Username"
						leftIcon={{ type: 'font-awesome', name: 'user-o' }}
						// onChangeText={(username) => this.setState({username})}
						// value={this.state.username}
						containerStyle={styles.formInput}
					/>
					<Input
						placeholder="Password"
						secureTextEntry={true}
						leftIcon={{ type: 'font-awesome', name: 'key' }}
						// onChangeText={(password) => this.setState({password})}
						// value={this.state.password}
						containerStyle={styles.formInput}
					/>
					<CheckBox title="Remember Me"
						center
						// checked={this.state.remember}
						// onPress={() => this.setState({remember: !this.state.remember})}
						containerStyle={styles.formCheckbox}
					/>
					<View style={styles.formButton}>
						<Button
							title=" Sign In"
							onPress={() => signIn()}
							// onPress={() => this.handleLogin()}
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