/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, BackHandler} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';


function ProfileScreen({navigation, route}) {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };
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
