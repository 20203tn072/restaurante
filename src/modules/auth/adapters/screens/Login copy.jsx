import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Login(props){
    console.log('props: ', props);
    const {name, lastname, isMan} = props;
    return(
        <View style={styles.container}>
            <Text>Inicio de sesión</Text>
            <Text>{`${name} ${lastname} ${isMan ? 'Sexo masculino' : 'Sexo femenino'}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'

    }
})