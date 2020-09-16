import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from 'react-native-elements';

import { AuthContext } from "./context";
import { Splash } from "./Splash";
import { Home } from './Home';
import { Chat } from './Chat';
import { Profile } from './Profile';
import { SignIn } from './SignIn';
// import { CreateAccount } from './CreateAccount';
// import { Details } from './Details';
// import { Search } from './Search';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
	<AuthStack.Navigator>
		<AuthStack.Screen
			name="SignIn"
			component={SignIn}
			options={{ title: "Sign In" }}
		/>
		{/* <AuthStack.Screen
			name="CreateAccount"
			component={CreateAccount}
			options={{ title: "Create Account" }}
		/> */}
	</AuthStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ChatStack = createStackNavigator();

const HomeStackScreen = () => (
	<HomeStack.Navigator>
		<HomeStack.Screen name="Home" component={Home} />
		{/* <HomeStack.Screen
			name="Details"
			component={Details}
			options={({ route }) => ({
				title: route.params.name
			})}
		/> */}
	</HomeStack.Navigator>
);

const ChatStackScreen = () => (
	<ChatStack.Navigator>
		<ChatStack.Screen name="Chat" component={Chat} />
		{/* <SearchStack.Screen name="Search" component={Search} /> */}
	</ChatStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
	<ProfileStack.Navigator>
		<ProfileStack.Screen name="Profile" component={Profile} />
	</ProfileStack.Navigator>
);

const TabsScreen = () => (
	<Tabs.Navigator
		screenOptions={({ route }) => ({
		tabBarIcon: ({ focused, color, size }) => {
			if (route.name === 'Home') {
				return (
					<Icon name='home' type='font-awesome' size={24} />
				);
			} else if (route.name === 'Chat') {
				return (
					<Icon name='comments' type='font-awesome' size={24} />
				);
			}
		},
		})}
		tabBarOptions={{
			activeTintColor: '#2979FF',
			inactiveTintColor: 'gray',
		}}
	>
		<Tabs.Screen name="Home" component={HomeStackScreen} />
		<Tabs.Screen name="Chat" component={ChatStackScreen} />
	</Tabs.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
	<Drawer.Navigator initialRouteName="Home">
		<Drawer.Screen name="Home" component={TabsScreen} />
		<Drawer.Screen name="Profile" component={ProfileStackScreen} />
	</Drawer.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
	<RootStack.Navigator headerMode="none">
		{userToken ? (
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
	const [isLoading, setIsLoading] = React.useState(true);
	const [userToken, setUserToken] = React.useState(null);

	const authContext = React.useMemo(() => {
		return {
		signIn: () => {
			setIsLoading(false);
			setUserToken("asdf");
		},
		signUp: () => {
			setIsLoading(false);
			setUserToken("asdf");
		},
		signOut: () => {
			setIsLoading(false);
			setUserToken(null);
		}
		};
	}, []);

	React.useEffect(() => {
		setTimeout(() => {
		setIsLoading(false);
		}, 1500);
	}, []);

	if (isLoading) {
		return <Splash />;
	}

	return (
		<AuthContext.Provider value={authContext}>
			<NavigationContainer>
				<RootStackScreen userToken={userToken} />
			</NavigationContainer>
		</AuthContext.Provider>
	);
};