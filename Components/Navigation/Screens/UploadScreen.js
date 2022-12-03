import * as React from 'react'
import {SafeAreaView, View, Text, StyleSheet} from 'react-native'
import { StatusBar } from 'expo-status-bar';


export default function UploadScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Upload</Text>
                <StatusBar style="auto" />
                <Text
                    onPress={() => navigation.navigate('Home')}>Upload</Text>
            </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});