import React, { useContext, useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Alert, TextInput, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Button } from 'react-native-elements';

import { AuthContext } from "./context";
import { Loading } from './Loading';

export const Chat = ({ navigation }) => {

	const { signOut, name, room } = useContext(AuthContext);

	const [message, setMessage] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [enableShift, setEnableShift] = useState(false);

	const scrollViewRef = useRef();

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
		<View>
			<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "position" : "height"} keyboardVerticalOffset={62} enabled={enableShift}>
				<View style={{ padding:5, height: "92%" }}>
					<ScrollView ref={scrollViewRef} onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
						<Text>{name}</Text>
						<Text>{room}</Text>
						<Text>{message}</Text>
					</ScrollView>
				</View>
				<View style={styles.buttonView}>
					<TextInput
						placeholder="Type message here . . ."
						style={{ height: 40, width: "85%", borderColor: 'gray', borderWidth: 1 }}
						onChangeText={(text) => setMessage(text)}
						onFocus={() => {setEnableShift(true)}}
						value={message}
					/>
					<Button
						title="Send"
						color="red"
						style={{ height: 40, width: "100%" }}
						onPress={() => confirmSignOut()}
						buttonStyle={{ backgroundColor: "#2979FF" }}
					/>
				</View>
			</KeyboardAvoidingView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	buttonView:{
		flexDirection:"row",
		padding:5
	}
});