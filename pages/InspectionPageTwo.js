import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Pressable, TextInput } from 'react-native'
import React from 'react'

export default function InspectionPageTwo({ navigation }) {
    return (
        <View style={styles.container}>


{/* ------------------------------------baseContent------------------------------------- */}
            <View style={styles.baseContent}>

                <View style={styles.Content1}>

                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', }}>
                        <Text>7.0 Market Value</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'column',  marginLeft:'10%'  }}>
                        <TextInput
                            style={styles.TextInput}
                            placeholderTextColor={'#000'}
                            placeholder="Rs.0.00"
                            backgroundColor='#fff'
                            onChangeText={x => setaddress(x)}
                        />
                    </View>

                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', }}>
                        <Text>Zero Only</Text>
                    </View>

                </View>

                <View style={styles.Content2}>

                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', }}>
                        <Text>8.0 Forded Value</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'column', marginLeft:'10%'  }}>
                        <TextInput
                            style={styles.TextInput}
                            placeholderTextColor={'#000'}
                            placeholder="Rs.0.00"
                            backgroundColor='#fff'
                            onChangeText={x => setaddress(x)}
                        />
                    </View>

                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', }}>
                        <Text>Zero Only</Text>
                    </View>

                </View>

                <View style={styles.Content3}>

                    <View style={{ flex: 1, flexDirection: 'column', }}>
                        <Text>9.0 Market Dem</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'column', marginLeft:'10%'  }}>
                        <TextInput
                            style={styles.TextInput}
                            placeholderTextColor={'#000'}
                            placeholder="Rs.0.00"
                            backgroundColor='#fff'
                            onChangeText={x => setaddress(x)}
                        />
                    </View>

                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', }}>

                    </View>

                </View>

                <View style={styles.Content4}>

                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', }}>
                        <Text>7.0 Market Value</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'column', marginLeft:'10%' }}>
                        <TextInput
                            style={styles.TextInput}
                            placeholderTextColor={'#000'}
                            placeholder="Rs.0.00"
                            backgroundColor='#fff'
                            onChangeText={x => setaddress(x)}
                        />
                    </View>

                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', }}>

                    </View>

                </View>
            </View>

{/* ------------------------------------MiddleContent------------------------------------- */}
            <ImageBackground style={styles.backgroundImg2}
                source={require('../assets/img/aston_martin_PNG47.png')}>
                <View style={styles.TextArea}>


                    <Text style={styles.TextContent}>
                        (The above prices inclusive of VAT)
                        I hearby confirm that the information
                        stated is correct as per inspections
                        made by me and to the best of my
                        knowledge. I also have given the
                        above valurtion after considering
                        all relevant factors, which affect
                        the value of the vehicle to the
                        best of my expertise knowledge.
                    </Text>


                    <View style={{ flex: 1, flexDirection: 'row', gap: 30 }}>
                        <View style={styles.SignaturOfValue}>
                            <Text>Signature Of Value</Text>

                            <Pressable onPress={() => { navigation.navigate('InspectionPageOne') }}>
                                <Text style={styles.SignatureText}>
                                    <Text>(Add Signature)</Text>
                                </Text>
                            </Pressable>

                        </View>

                        <View style={styles.DateText}>
                            <Text>Date</Text>
                        </View>

                    </View>

                </View>



            </ImageBackground>

{/* ------------------------------------buttonContnt------------------------------------- */}

            <View style={styles.button}>
                <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('InspectionPageOne') }}>
                    <Text style={styles.btnText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: '#F8F8F8'
    },
    baseContent: {
        flex: 2,

        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '10%'

    },
    Content1: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: '2%',
        marginRight: '2%'
    },
    Content2: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: '2%',
        marginRight: '2%'
    },
    Content3: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: '2%',
        marginRight: '2%'
    },
    Content4: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: '2%',
        marginRight: '2%'
    },
    TextArea: {
        flex: 1,
        /*    marginLeft: 20,
           marginRight: 20, */


    },
    backgroundImg2: {
        flex: 2,
        opacity: 0.5,
    },
    TextContent: {
        color: '#000',
        fontSize: 17,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        fontWeight:'bold'


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
    SignatureText: {
        textDecorationLine: 'underline',
    },
    SignaturOfValue: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10%'
    },
    DateText: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10%'
    },
    TextInput: {
        height: 40,
        width: 120,
        

    }
})