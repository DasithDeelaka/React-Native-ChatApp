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
import { CustomDrawerContent } from './CustomDrawerContent';
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

const HomeStackScreen = ({ navigation }) => (
	<HomeStack.Navigator>
		<HomeStack.Screen
			name="Home"
			component={Home}
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
		{/* <HomeStack.Screen
			name="Details"
			component={Details}
			options={({ route }) => ({
				title: route.params.name
			})}
		/> */}
	</HomeStack.Navigator>
);

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
		{/* <SearchStack.Screen name="Search" component={Search} /> */}
	</ChatStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = ({ navigation }) => (
	<ProfileStack.Navigator>
		<ProfileStack.Screen name="Profile"
			component={Profile}
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
	</ProfileStack.Navigator>
);

const TabsScreen = () => (
	<Tabs.Navigator initialRouteName="Home"
		screenOptions={({ route }) => ({
			tabBarIcon: ({ focused, color, size }) => {
				let iconName;
				if (route.name === 'Home') {
					iconName = focused ? 'home' : 'home';
				} else if (route.name === 'Chat') {
					iconName = focused ? 'comments' : 'comments';
				}
				return <Icon name={iconName} size={size} color={color} type='font-awesome' />;
			}
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
	<Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} />}>
		<Drawer.Screen name="Home"
			component={TabsScreen}
			options={ () => ({
				drawerIcon: ({ focused, color, size }) => {
					let iconName;
					iconName = focused ? 'home' : 'home';
					return <Icon name={iconName} size={size} color={color} type='font-awesome' />;
				}
			})}
			tabBarOptions={{
				activeTintColor: '#2979FF',
				inactiveTintColor: 'gray',
			}}
		/>
		<Drawer.Screen name="Profile"
			component={ProfileStackScreen}
			options={ () => ({
				drawerIcon: ({ focused, color, size }) => {
					let iconName;
					iconName = focused ? 'user' : 'user';
					return <Icon name={iconName} size={size} color={color} type='font-awesome' />;
				}
			})}
			tabBarOptions={{
				activeTintColor: '#2979FF',
				inactiveTintColor: 'gray',
			}}
		/>
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