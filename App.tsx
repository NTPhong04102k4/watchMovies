import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './utils/rootNavigation';
import {Provider} from 'react-redux';
import storeDataLogin from './src/redux_toolkit/Store';
import {useDispatch} from 'react-redux';
import {readDataObject} from './utils/AsyncStorage';
import {storeData} from './src/redux_toolkit/features/StoreInforLogin';
const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  async function LocalStorage() {
    var res = await readDataObject(1);
    dispatch(storeData({...res}));
    setLoading(false);
  }
  useEffect(() => {
    LocalStorage();
  }, []);

  if (loading == true) {
    return <></>;
  } else {
    return (
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    );
  }
};
export default function AppWrapper() {
  return (
    <Provider store={storeDataLogin}>
      <App />
    </Provider>
  );
}
