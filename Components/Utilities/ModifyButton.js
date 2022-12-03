import React, {useEffect, useState} from 'react';
import { Pressable, View, Modal, TextInput, Alert, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

 // temp 
export default function ModifyButton({balance, label, action, stateChanger}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [text,setText] = useState('');

    useEffect(() => {
        console.log('label: ' + label);
        console.log('action: ' + action);
        console.log('stateChanger: ' + stateChanger);
    });

    return (
        <View>
             <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Enter the quantity of Dabloons that would like to modify below.</Text>
    
                        <TextInput 
                        style={styles.input}
                        value={text}
                        keyboardAppearance="dark"
                        keyboardType="numeric"
                        onChangeText={(text) => setText(text)}       
                        />
                    
                            <View style={styles.buttonContainer}>
                                <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>JK.</Text>
                                </Pressable>

                                <Pressable
                                    style={styles.submitButton}
                                    onPress={() =>storeValue(text, label).then((value) => stateChanger(value)).then(() => setModalVisible(!modalVisible))}
                                >
                                    <Text style={styles.submitButtonText}>Submit</Text>
                                </Pressable>
                            </View>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>{label}</Text>
            </Pressable>
        </View>
    )
}


async function storeValue(value, text)  {
    if (text === "Subtract Dabloons") {
        const oldBalance = await AsyncStorage.getItem('@balance')
        console.log('old balance: ' + oldBalance);
        value = oldBalance - value;
    }

    try {
        console.log('Setting new balance value of ' + value);
        await AsyncStorage.setItem('@balance', value.toString());
        console.log('Value successfully stored');
    } catch (e) {
        console.log(e);
    }

    console.log(value)
    return value.toString();
}

const styles = StyleSheet.create({
    submitButton: {
        backgroundColor: '#000',
        padding: 10,
        margin: 15,
        height: 40,
        width: 100,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitButtonText: {
        color: 'white'
    },
    input: {
        height: 60,
        margin: 12,
        borderWidth: 1,
        paddingLeft: 70,
        paddingRight: 70,
        borderRadius: 5,
        width: '70%',
        backgroundColor: '#fff',
      },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    modalView: {
        margin: 20,
        backgroundColor: "#2196F3",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 6,
        padding: 10,
        elevation: 2,
        margin: 10
      },
      buttonOpen: {
        backgroundColor: "#ED8312",
      },
      buttonClose: {
        backgroundColor: "#ed8312",
        border: '1px solid #fff',
        padding: 10,
        margin: 15,
        height: 40,
        width: 100,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: 'white'
      }
});
