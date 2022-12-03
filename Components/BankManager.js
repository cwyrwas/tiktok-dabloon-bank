import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Form from './Utilities/Form';


export default function BankManager() {
    // get the balance from AsyncStorage
    const [balance, setBalance] = useState(0);
    
    useEffect(() => {
        async function getBalance() {
            console.log('getting balance');
            try {
                const value = await AsyncStorage.getItem('@balance');
                console.log(value);
                if (value !== null) {
                    setBalance(value);
                }
                
            } catch (e) {
                console.log(e);
            }
          }
          getBalance();


    }, []);
    

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image
                style={styles.mainImage}
                source={require('../assets/cat.png')}
                /> 
                <Text style={styles.textInfo}>Dabloons: {balance}</Text>
                <Text>Manage your Dabloon inventory below</Text>
                <Form balance={balance} stateChanger={setBalance} />
            </View>
        </SafeAreaView>
    );
  }


  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%'
    },
    mainImage: {
        width: 500,
        height: 500,
        marginBottom: 20
    },
    textInfo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'green',
        whiteSpace: 'nowrap',
        textWrap: 'nowrap'
    }
  })