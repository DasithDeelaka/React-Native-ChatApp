import React from "react";
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

import { AuthContext } from "./context";

export function CustomDrawerContent(props) {
    const { signOut } = React.useContext(AuthContext);
	return (
		<DrawerContentScrollView {...props}>
			<View style={styles.drawerHeader}>
                <View style={{flex:1}}>
                    <Image source={require('../assets/splash.png')} style={styles.drawerImage} />
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>ThyroidApp</Text>
                </View>
            </View>
			<DrawerItemList {...props} />
            <Button title="Sign Out" color="red" onPress={() => signOut()} />
		</DrawerContentScrollView>
	);
}

const styles = StyleSheet.create({
    drawerHeader: {
        backgroundColor: '#2979FF',
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        width: 150,
        height: 150
    }
});