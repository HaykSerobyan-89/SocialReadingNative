import React, {useState} from 'react';
import { Button } from 'react-native';
import {TextInput, TouchableOpacity, View, Text} from 'react-native';
import axios from 'axios';

function Login({ navigation }) {
  // console.log(props);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <Text style={{color: 'red'}}>Login</Text>
      <TextInput
        placeholder="email"
        underlineColorAndroid={'transparent'}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="password"
        underlineColorAndroid={'transparent'}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
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
                  // props.navigation.navigate("Home")
                  console.log('act', response.data);
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
              } else if (error.request) {
                console.log('error.request ', error.request);
              } else if (error.message) {
                console.log('error.request ', error.message);
              }
            });
        }}>
        <Text>Sign in</Text>
      </TouchableOpacity>
      <Button
            title="Don't have an account"
            onPress={() => {
              console.log("button")
              navigation.navigate('Register')
              }
            }
          />
    </View>
  );
}

export default Login;
