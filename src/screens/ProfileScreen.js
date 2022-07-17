import React from 'react';
import { Text } from 'react-native';


function ProfileScreen ({ navigation, route })  {
    console.log("profile")
    console.log("PARAMS __________________________", route.params)
  return <Text>This is profile</Text>;
};

export default ProfileScreen;