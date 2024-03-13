import React,{useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button, Image, Icon} from '@rneui/base';
import Logo from '../../../../../assets/logo.png';
import { isEmpty } from 'lodash';
import Loading from '../../../../kermel/components/Loading';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

//hook - useState
export default function Login(props){
    const {navigation} = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [showMessage, setShowMessage] = useState({email:'', password:''});
    const [visible, setVisible] = useState(false);
    const auth = getAuth();

    const login = async() =>{
        if (!isEmpty(email) && !isEmpty(password)) {
            //proceso de inicio de sesion
            setShowMessage({email:'', password:''}); 
            setVisible(true);
            try {
                const response = await signInWithEmailAndPassword(auth, email, password);
                navigation.navigate('UserLogged');
            } catch (error) {
                console.log("Error", error);
                setShowMessage({email:'', password:'Ususario o contrasena incorrectos'});
            }finally{
                setVisible(false);
            }
        }else{
            setShowMessage({email:'Campo obligatorio', password:'Campo obligatorio'});
        }
    }

    return(
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} resizeMode='contain'/>
            <Input placeholder='erick@utez.edu.mx' label='Correo electrónico: *' keyboardType='email-address' 
                onChange={({nativeEvent: {text}}) => setEmail(text)} labelStyle={styles.label}
                containerStyle={styles.input} errorMessage={showMessage.email} 
                rightIcon={
                    <Icon type='material-community' name='email-outline' color='tomato'/>
                }
            />
            <Input placeholder='********' label='Contraseña: *' 
                onChange={({nativeEvent: {text}}) => setPassword(text)} labelStyle={styles.label}
                containerStyle={styles.input} errorMessage={showMessage.password} secureTextEntry={showPassword} 
                rightIcon={
                    <Icon type='material-community' name={showPassword ? 'eye-outline':'eye-off-outline'} color='tomato' onPress={() => setShowPassword(!showPassword)}/>
                }
            />
            <Button title='Iniciar Sesión' onPress={login} containerStyle={styles.btnContainer} buttonStyle={styles.btnStyle} titleStyle={{color: "black"}}/>
            <Button title='Registrarte' type='clear' onPress={() => navigation.navigate('CreateAccount')}/>
            <Loading visible={visible} title='Iniciando Sesion'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center', 
        padding: 16

    },

    logo: {
        width: 120,
        height: 120,
        marginBottom: 8
    },

    input: {
        paddingHorizontal: 16,
        marginVertical: 8
    },
    
    label: {
        color: 'tomato'
    },

    btnStyle: {
        backgroundColor: '#fcd562',
        color: '#000'
    },

    btnContainer: {
        width: '80%'
    }
});