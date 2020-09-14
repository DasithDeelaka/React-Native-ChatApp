import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Image } from 'react-native'

// Loading indicator view
export const Home = () => {
    return(
        <View style={styles.loadingView} >
            <Text style={styles.loadingText} >Home Screen</Text>
            <Image style={styles.stretch} source={require('../assets/splash.png')} />
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    loadingView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    loadingText: {
        color: '#2979FF',
        fontSize: 30,
        fontWeight: 'bold'
    },
    stretch: {
        width: 300,
        height: 300
      },
});