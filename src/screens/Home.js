/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Alert,
} from 'react-native';
import axios from 'axios';

function Login({navigation}) {
  const [email, setEmail] = useState('elenamkrtchyan5@gmail.com');
  const [password, setPassword] = useState('Barev12345');
  return (
    <View style={styles.view}>
      <TextInput
        placeholder="email"
        underlineColorAndroid={'transparent'}
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="password"
        underlineColorAndroid={'transparent'}
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => {
          axios
            .post('https://www.sr-be.arpify.com/auth/jwt/create/', {
              email: email,
              password: password,
            })
            .then(function (resp) {
              console.log(resp);
              const userInfo = 'JWT ' + resp.data.access;
              axios
                .get('https://www.sr-be.arpify.com/auth/users/me', {
                  headers: {Authorization: userInfo},
                })
                .then(function (response) {
                  console.log('act', response.data);
                  navigation.navigate('Profile', {data: response.data});
                  setEmail('');
                  setPassword('');
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
        <Text style={styles.text}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.tochableDont}
        onPress={() => {
          navigation.navigate('Register');
        }}
      >
      <Text style={ { color: 'grey' } }>Do not have an account?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#edfcf8',
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 1,
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
    width: 200,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,

  },
 tochableDont: {
 backgroundColor: 'transparent',
  }
});

export default Login;
