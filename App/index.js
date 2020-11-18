import React, { useState, useEffect, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from 'react-native-elements';

import { AuthContext } from "./context";
import { Splash } from "./Splash";
import { Chat } from './Chat';
import { SignIn } from './SignIn';
import { CustomDrawerContent } from './CustomDrawerContent';

// Stack Navigation from SignIn screen
const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
	<AuthStack.Navigator>
		<AuthStack.Screen
			name="SignIn"
			component={SignIn}
			options={{ title: "Sign In" }}
		/>
	</AuthStack.Navigator>
);

// Stack Navigation from Chat screen
const ChatStack = createStackNavigator();
const ChatStackScreen = ({ navigation }) => (
	<ChatStack.Navigator>
		<ChatStack.Screen name="Chat"
			component={Chat}
			options={{ headerLeft: () => (
				<Icon
					name="menu"
					size={24}
					color= 'grey'
					onPress={ () => navigation.toggleDrawer() }
					style={{ marginLeft: 15 }}
				/>
            ) }}
		/>
	</ChatStack.Navigator>
);

// Drawer Navigation bar
const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
	<Drawer.Navigator initialRouteName="Chat" drawerContent={props => <CustomDrawerContent {...props} />}>
		<Drawer.Screen name="Chat"
			component={ChatStackScreen}
			options={ () => ({
				drawerIcon: ({ focused, color, size }) => {
					let iconName;
					iconName = focused ? 'comments' : 'comments';
					return <Icon name={iconName} size={size} color={color} type='font-awesome' />;
				}
			})}
		/>
	</Drawer.Navigator>
);

// Render Authentication & Drawer at the initial app deployment
const RootStack = createStackNavigator();
const RootStackScreen = ({ name }) => (
	<RootStack.Navigator headerMode="none">
		{name ? (
		<RootStack.Screen
			name="App"
			component={DrawerScreen}
			options={{
			animationEnabled: false
			}}
		/>
		) : (
		<RootStack.Screen
			name="Auth"
			component={AuthStackScreen}
			options={{
			animationEnabled: false
			}}
		/>
		)}
	</RootStack.Navigator>
);

export default () => {

	const [isLoading, setIsLoading] = useState(true);
	const [name, setName] = useState();

	// Authentication process
	const authContext = useMemo(() => {
		return {
			signIn: (name) => {
				setIsLoading(false);
				setName(name);
			},
			signOut: () => {
				setIsLoading(false);
				setName();
			},
			name
		};
	}, [name]);

	// Splash screen
	useEffect(() => {
		setTimeout(() => {
		setIsLoading(false);
		}, 1500);
	}, []);

	if (isLoading) {
		return <Splash />;
	}

	// Render initial route deployment
	return (
		<AuthContext.Provider value={authContext}>
			<NavigationContainer>
				<RootStackScreen name={name} />
			</NavigationContainer>
		</AuthContext.Provider>
	);
};