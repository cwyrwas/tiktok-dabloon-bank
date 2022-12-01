import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import ModifyButton from './ModifyButton';

export default function Form(balance) {
    return (
        <View style={styles.container}>
            <ModifyButton
            text="Add Dabloons"
            action="add"
            />
            <ModifyButton
            text="Subtract Dabloons"
            action="subtract"
            />
        </View>
    )
}



const styles = StyleSheet.create({
   container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',         
   }
});