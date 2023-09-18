import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function InspectionPageOne({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.plcimg}>
                <Image style={styles.backgroundImg1}
                    source={require('../assets/img/plcimg.png')}>
                </Image>
            </View>

            <View style={styles.MainTopic}>
                <Text style={styles.MainTopicText}>VEHICAL INSPECTION </Text>
                <Text style={styles.MainTopicText}>&</Text>
                <Text style={styles.MainTopicText}>VALUVATION REPORT</Text>
            </View>

            <ImageBackground style={styles.backgroundImg2}
                source={require('../assets/img/aston_martin_PNG47.png')}>
            </ImageBackground>

            <View style={styles.button}>
                <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('InspectionPageTwo') }}>
                    <Text style={styles.btnText}>Start</Text>
                </TouchableOpacity>
            </View>




        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        
    },
    backgroundImg1: {
        flex: 1,
        height: 200,
        width: 200

    },
    backgroundImg2: {
        flex: 3,

    },
    plcimg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    MainTopic: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    MainTopicText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000'

    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        padding: 7,
        borderRadius: 5

    },
    btnText: {
        color: 'white',
        fontSize: 18
    },
})