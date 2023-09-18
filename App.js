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
                <Stack.Screen options={{
                    title: 'Insprection Form',
                    headerStyle: {
                        backgroundColor: '#EB0A18',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        marginLeft: '25%',
                        fontFamily: 'Inter',
                        fontWeight: '600',
                        fontSize: 25,
                        letterSpacing:0.5

                    },
                }} name="InspectionPageOne" component={InspectionPageOne} />

                <Stack.Screen options={{
                    title: 'Insprection Form',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        marginLeft: '15%',
                        fontFamily: 'Inter',
                        fontWeight: '600',
                        fontSize: 25,

                    },
                }} name="InspectionPageTwo" component={InspectionPageTwo} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})