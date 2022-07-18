/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, BackHandler, View, StyleSheet} from 'react-native';
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
    <View style={styles.view}>
      <Text style={styles.Text}>
        This is {route.params.data.first_name} {route.params.data.last_name}{' '}
        profile.
      </Text>
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
    paddingTop: 30,
  },
  text: {
    color: 'grey',
    textAlign: 'center',
    fontSize: 20,
  },
});
export default ProfileScreen;
