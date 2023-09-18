import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InspectionPageOne from './pages/InspectionPageOne';
import InspectionPageTwo from './pages/InspectionPageTwo';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={InspectionPageOne} />
                <Stack.Screen name="Notifications" component={InspectionPageTwo} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})