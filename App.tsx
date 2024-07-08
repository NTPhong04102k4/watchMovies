import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './utils/rootNavigation';
import {Provider} from 'react-redux';
import storeDataLogin from './src/redux_toolkit/Store';
import {useDispatch} from 'react-redux';
import {readDataObject} from './utils/AsyncStorage';
import {storeData} from './src/redux_toolkit/features/loginslice';
import {ThemeContext} from './screen/useContext/StateThemeContext';
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
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    );
  }
};
export default function AppWrapper() {
  const [isThemeDark, setIsThemeDark] = React.useState(true);
useEffect(()=>{toggleTheme(isThemeDark)},[isThemeDark])
  const toggleTheme = React.useCallback(
    (value: boolean) => {
      console.log('llll')
      return setIsThemeDark(value);
    },
    [isThemeDark],
  );
  const valueTheme = React.useMemo(
    () => ({isThemeDark, toggleTheme}),
    [isThemeDark, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={valueTheme}>
      <Provider store={storeDataLogin}>
        <App />
      </Provider>
    </ThemeContext.Provider>
  );
}
