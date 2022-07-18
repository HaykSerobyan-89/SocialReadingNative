import React from 'react';
import {Text, SafeAreaView,BackHandler} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';


function ProfileScreen({navigation, route}) {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true
      }
   
      BackHandler.addEventListener(
        'hardwareBackPress', onBackPress
      );
   
      return () =>
        BackHandler.removeEventListener(
          'hardwareBackPress', onBackPress
        );
    }, [])
  );
  console.log('PARAMS __________________________', route.params.data);
  return (
    <>
      <Text>
        This is {route.params.data.first_name} {route.params.data.last_name}{' '}
        profile.
      </Text>
    </>
  );
}

export default ProfileScreen;
