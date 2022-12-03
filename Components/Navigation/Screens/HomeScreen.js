import * as React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BankManager from '../../BankManager'
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <BankManager />
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });