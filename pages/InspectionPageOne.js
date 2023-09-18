import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function InspectionPageOne() {
    return (
        <View style={styles.container}>
            <View style={styles.plcimg}>

            </View>

            <View style={styles.MainTopic}>

            </View>

            <View style={styles.button}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    plcimg: {
        flex: 1,
    },
    MainTopic: {
        flex: 1,
    },
    button: {
        flex: 4,
    }
})