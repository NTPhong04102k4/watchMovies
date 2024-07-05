import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  StyleSheet,
} from 'react-native';
import {firebase} from '@react-native-firebase/database';
import database from '@react-native-firebase/database';
function RealTimeDatabase() {
  const reference = firebase
    .app()
    .database('https://testapp-ba20d-default-rtdb.firebaseio.com/')
    .ref('users/123');
  const valueUser = database()
    .ref('/users/123/')
    .on('value', snapshot => {
      console.log('snapshot:', snapshot);
    }); // đọc dữ liệu theo thời gian thực
  function User({userId}: any) {
    useEffect(() => {
      const onValueChange = database()
        .ref(`/users/${userId}`)
        .on('value', snapshot => {
          console.log('User data: ', snapshot.val());
        });
      // Dừng nghe cập nhật khi không còn cần thiết
      return () =>
        database().ref(`/users/${userId}`).off('value', onValueChange);
    }, [userId]);
  }
  async function name(params: any) {
    // truy vấn dữ liệu
    await database().ref('users').orderByChild('age').startAt(21).once('value');
  }
  // ghi đè dữ liệu hiện có trong database
  database()
    .ref('/users/123')
    .set({
      name: 'Ada Lovelace',
      age: 31,
    })
    .then(() => console.log('Data set.'));
  // sẽ xóa luôn dữ liệu người dùng mang id 123 đó ra khỏi realtime database .
  database().ref('/users/123').set(null);
  // cập nhập dữ liệu , nó sẽ hợp nhất với dữ liệu hiện có.
  database()
    .ref()
    .update({})
    .then(() => console.log('Update succesful'));
  useEffect(() => {
    // sắp xếp dữ liệu theo giá trị giảm dần
    const scores = database().ref('scores').orderByValue().once('value');
    const users = database().ref('users').limitToFirst(10).once('value'); // giới hạn số lượng kết quả trả ra bằng method LimidTOFirst(number)

    // tạo một nhánh ới và đồng thời gán key cho nhánh đó .
    const newReference = database().ref('/users').push();
    console.log('Auto generated key: ', newReference.key);
    // thêm dữ liệu dưới dạng Json cho nhánh đó.
    newReference
      .set({
        age: 32,
      })
      .then(() => console.log('Data updated.'));
    database()
      .ref('/users/123')
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());
      }); // đọc dữ liệu người dùng id :123 một lần
  }, []);
  return (
    <View style={styles.container}>
      <Text>sản phẩm demo</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default RealTimeDatabase;
