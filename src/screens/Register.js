/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.view}>
      <TextInput
        placeholder="name"
        style={styles.input}
        underlineColorAndroid={'transparent'}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="surname"
        style={styles.input}
        underlineColorAndroid={'transparent'}
        value={surname}
        onChangeText={setSurname}
      />
      <TextInput
        placeholder="email"
        style={styles.input}
        underlineColorAndroid={'transparent'}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="password"
        style={styles.input}
        underlineColorAndroid={'transparent'}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => {
          axios
            .post('https://www.sr-be.arpify.com/auth/users/', {
              first_name: name,
              last_name: surname,
              email: email,
              password: password,
            })
            .then(function (resp) {
              console.log(resp.data);
              setName('');
              setSurname('');
              setPassword('');
              setEmail('');
              Alert.alert('Verify your email');
            })
            .catch(function (error) {
              if (error.response) {
                console.log('error.response ', error.response);
                const arr = Object.keys(error.response.data);
                if (error.response.data) {
                  arr.forEach(a => {
                    Alert.alert(`${a}: ${error.response.data[a]}`);
                  });
                }
              } else if (error.request) {
                console.log('error.request ', error.request);
              } else if (error.message) {
                console.log('error.request ', error.message);
              }
            });
        }}>
        <Text style={styles.text}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#edcfff',
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderRadius: 20,
    backgroundColor: 'white',
    borderBottomColor: '#000000',
    padding: 10,
    width: 300,
    marginBottom: 10,
  },
  text: {
    color: 'grey',
    textAlign: 'center',
    fontSize: 20,
  },
  TouchableOpacity: {
    backgroundColor: 'white',
    color: 'grey',
    width: 200,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,

  },
});

export default Register;
