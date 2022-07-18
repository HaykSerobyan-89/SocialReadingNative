import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import Register from './src/screens/Register';
import ProfileScreen from './src/screens/ProfileScreen'


const Stack = createNativeStackNavigator();

function MyStack () {
  return (
  <NavigationContainer>
                       <Stack.Navigator initialRouteName="Login">
                         <Stack.Screen
                           name="Login"
                           component={HomeScreen}
                           options={{ title: 'Social Reading' }}
                         />
                         <Stack.Screen name="Register" component={Register} />
                         <Stack.Screen name="Profile" options={{headerShown:false}, {title:"profile"}} component={ProfileScreen} />


                       </Stack.Navigator>
                     </NavigationContainer>

  );
};

export default MyStack