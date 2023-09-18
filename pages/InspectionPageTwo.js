import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function InspectionPageTwo() {
  return (
    <View style={styles.container}>
            <View style={styles.baseContent}>

            </View>

            <View style={styles.MidleContent}>

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
    baseContent: {
        flex: 3,
    },
    MidleContent: {
        flex: 3,
    },
    button: {
        flex: 1,
    }
})