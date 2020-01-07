import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

class Timer extends Component {
    render() {
        return (
            <View styles={styles.container}>
                <StatusBar barStyle={"light-content"}/>
                <View styles={styles.upper}>
                    <Text styles={styles.time}>25:00</Text>
                </View>
                <View styles={styles.lower}>
                    <Text>BUTTON HERE</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#CE0B24"
    },
    upper: {
        flex:2,
        justifyContent: "center",
        alignItems: "center"
    },
    lower: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    time: {
        color:"white",
        fontSize: 120,
        fontWeight: "100"
    }
})

export default Timer;