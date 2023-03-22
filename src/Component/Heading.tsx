
import React from 'react';
import { View, StyleSheet, Text } from "react-native";



const Heading = () => {
    return (
        <View style={styles.viewContainerStyle}>
            <View
                style={{ width: '90%' }}>
                <Text style={styles.addTextStyles}>Number List</Text>
            </View>
            <View style={{ height: 2, width: '100%', backgroundColor: 'black' }}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainerStyle: {
        gap: 10,
        alignItems: 'center'
    },
    addTextStyles: {
        textAlign: 'center',
        fontSize: 20,
        color: 'red',
        fontStyle: 'italic',
        margin: 10
    }
})

export default Heading;