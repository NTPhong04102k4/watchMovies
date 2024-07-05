import AsyncStorage from '@react-native-async-storage/async-storage';

const storeDataString = async (value: any, id: number) => {
  try {
    await AsyncStorage.setItem(`my-key_${id}`, value);
  } catch (error) {
    console.log(error);
  }
};
const storeDataObject = async (value: any, id: number) => {
  try {
    var JSONValue = JSON.stringify(value);
    await AsyncStorage.setItem(`my-key_${id}`, JSONValue);
    console.log('lưu thành công vào async');
  } catch (error) {
    console.log('error:', error);
  }
};
const readData = async (id: number) => {
  try {
    const value = await AsyncStorage.getItem(`my-key_${id}`);
    if (value !== null) {
      console.log('value read data string:', value);
      return value;
    }
  } catch (error) {
    console.log(error);
  }
};
const readDataObject = async (id: number) => {
  try {
    const valueObject = await AsyncStorage.getItem(`my-key_${id}`);
    //JSON.parse chuyển JSON thành javascript và JSOn.stringify chuyển JSOn thành object js
    console.log('value:', valueObject);
    return valueObject !== null ? JSON.parse(valueObject) : null;
  } catch (error) {
    console.log(error);
  }
};
const removeItem = async (id: number) => {
  try {
    await AsyncStorage.removeItem(`my-key_${id}`);
    readDataObject(id);
  } catch (error) {
    console.log(error);
  }
};
const getAllKeys = async () => {
  let keys: (Error | null | undefined)[] = [];
  try {
    await AsyncStorage.getAllKeys(key => {
      console.log('key', key);
    });
  } catch (error) {
    console.log(error);
  }
  console.log('Done', keys);
};
const multiGetItem = async () => {
  let ArrayValue;
  try {
    ArrayValue = await AsyncStorage.multiGet([
      'name_key_index',
      'name_key_index',
    ]);
  } catch (error) {
    console.log(error);
  }
  console.log(ArrayValue);
};
// ghép các cặp lại thành 1 mảng key:value
const multiSetItem = async () => {
  let FirstPair = ['age', '5'];
  let TwoPair = ['sex', '1'];
  try {
    await AsyncStorage.multiSet([FirstPair, TwoPair]);
  } catch (error) {
    console.log(error);
  }
  console.log('done');
};
const removeFew = async () => {
  const keys = ['@MyApp_USER_1', '@MyApp_USER_2'];
  try {
    await AsyncStorage.multiRemove(keys);
  } catch (e) {
    // remove error
  }

  console.log('Done');
};
const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
  }

  console.log('Done.');
};
export {
  storeDataObject,
  storeDataString,
  readData,
  readDataObject,
  getAllKeys,
  multiGetItem,
  removeFew,
  removeItem,
  clearAll,
};
