import React from 'react';
import {View, StyleSheet, Text, StatusBar, Button} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager} from 'react-native-fbsdk-next';
import {CommonActions} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteData} from '../src/redux_toolkit/features/StoreInforLogin';

const signOutGG = async () => {
  await GoogleSignin.signOut();
};
const signOutFB = async () => {
  await LoginManager.logOut();
};
function LogOut({routeData, navigation, dispatch}: any) {
  dispatch(deleteData());
  switch (routeData?.type) {
    case 'gg':
      signOutGG();
      break;
    case 'facebook':
      signOutFB();
      break;
    default:
      break;
  }

  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: 'Login'}],
    }),
  );
}
export default function Home({navigation}: any) {
  const dispatch = useDispatch();
  const {id, accessToken, userName} = useSelector(state => state.login);
  console.log(id, accessToken, userName);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        animated={true}
        backgroundColor={'white'}
      />
      <Text style={{fontWeight: '700', fontSize: 18, lineHeight: 20}}>
        User Data
      </Text>
      <Text
        style={{
          color: 'black',
          fontSize: 14,
          fontWeight: '500',
        }}>{`${userName}: ${id}`}</Text>
      <View style={{width: '80%'}}>
        <Button
          title="Log Out"
          onPress={() => LogOut({navigation, dispatch})}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
