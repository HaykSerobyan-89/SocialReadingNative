import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text style={styles.text}>Register</Text>
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
        onPress={() => {
          axios.post('https://www.sr-be.arpify.com/auth/users/', {
              first_name: name,
              last_name: surname,
              email: email,
              password: password,
            })
            .then(function( resp ) {
              console.log(resp.data);
            })
            .catch(function (error) {
              if (error.response) {
                console.log('error.response ', error.response);
              } else if (error.request) {
                console.log('error.request ', error.request);
              } else if (error.message) {
                console.log('error.request ', error.message);
              }
            });
        }}>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: 'grey',
    alignSelf: 'stretch',
  },
  text: {
    color: 'red',
  },
});

export default Register;
