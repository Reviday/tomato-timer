import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from "../Button/Button";
    
class Timer extends Component {

    componentWillReceiveProps(nextProps) { // 컴포넌트가 새로운 props를 얻을 때마다 호출함
        const currentProps = this.props;
        // console.log(`The current isPlaying is: ${currentProps.isPlaying} and the new isPlaying is: ${nextProps.isPlaying}`);
        if(!currentProps.isPlaying && nextProps.isPlaying) {
            // start the interval
            console.log("should start!")    
            const timerInterval = setInterval(() => {
                currentProps.addSecond();
            }, 1000);
            this.setState({
                timerInterval
            })
        } else if(currentProps.isPlaying && !nextProps.isPlaying) {
            // stop the interval
            console.log("should stop!")
            clearInterval(this.state.timerInterval);
        }
    }

    render() {
        const { isPlaying, elapsedTime, timerDuration, startTimer, restartTimer, addSecond } = this.props; 
        console.log(this.props); 
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <View style={styles.upper}>
                    <Text style={styles.time}>25:00</Text>
                </View>
                <View style={styles.lower}>
                    {!isPlaying && (
                        <Button iconName="play-circle" onPress={startTimer}/>
                    )}
                    {isPlaying &&(
                        <Button iconName="stop-circle" onPress={restartTimer}/>
                    )}
                </View>
            </View>
        );
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
});

export default Timer;