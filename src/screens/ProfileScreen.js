import React from 'react';
import { Text} from 'react-native';


function ProfileScreen ({ navigation, route })  {


    console.log("profile")
    console.log("PARAMS __________________________", route.params.data)
  return (<>
  <Text>This is {route.params.data.first_name} {route.params.data.last_name} profile.</Text>
  </>)
};

export default ProfileScreen;