import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import ModifyButton from './ModifyButton';

export default function Form({balance, stateChanger}) {
    return (
        <View style={styles.container}>
            <ModifyButton
            label="Add Dabloons"
            action="add"
            stateChanger={stateChanger}
            balance={balance}
            />
            <ModifyButton
            label="Subtract Dabloons"
            action="subtract"
            stateChanger={stateChanger}
            />
        </View>
    )
}



const styles = StyleSheet.create({
   container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',  
        width: '100%',
        paddingTop: 20       
   }
});