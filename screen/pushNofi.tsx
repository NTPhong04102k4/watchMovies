import React, {useEffect, useState} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  Easing,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
  RefreshControl,
  NativeEventEmitter,
} from 'react-native';
import Voice from '@react-native-voice/voice';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs();

const App = () => {

const [list,setList]=useState([
{
  id:1,
  title:'List Item ',
},{
  id:2,
  title:'List Item ',
},{
  id:3,
  title:'List Item ',
},{
  id:4,
  title:'List Item ',
},{
  id:5,
  title:'List Item ',
},{
  id:6,
  title:'List Item ',
},{
  id:7,
  title:'List Item ',
},{
  id:8,
  title:'List Item ',
},{
  id:9,
  title:'List Item ',
},{
  id:10,
  title:'List Item ',
},{
  id:11,
  title:'List Item ',
},
])  ;
//   const animation = new Animated.Value(0);
//   const startAnimation = () => {
//     Animated.sequence([
//       Animated.timing(animation, {
//         toValue: 1,
//         duration: 2000,
//         easing: Easing.ease,
//         useNativeDriver: true,
//       }),
//       Animated.timing(animation, {
//         toValue: 2,
//         duration: 2000,
//         easing: Easing.ease,
//         useNativeDriver: true,
//       }),
//       Animated.timing(animation, {
//         toValue: 0,
//         duration: 5000,
//         easing: Easing.ease,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   };

//   // const [recognizedText, setRecognizedText] = useState('');
// const backgroundColor=animation.interpolate({
//   inputRange:[0,1,2],
//   outputRange:['pink','red','purple'],
// });
// const borderRadius=animation.interpolate({
//   inputRange:[0,1,2],
//   outputRange:[10,50,10]
// })
const [showDetail,setShowDetail]=useState(false)
const [refreshing, setRefreshing] = React.useState(false);

const onRefresh = React.useCallback(() => {
  setRefreshing(true);
  setTimeout(() => {
    setRefreshing(false);
  }, 2000);
}, []);
function renderItem({item,index}:{index:number,item:any}){
  return(
    <View key={index} style={{width:Dimensions.get('screen').width*0.9,height:100,backgroundColor:'grey',justifyContent:'center',paddingStart:50}}>
      <Text>{item.id}{'. '}{item.title}</Text>
    </View>
  );
}

  return (
    <View style={styles.container}>
      {/* <Animated.View
        style={{
          ...styles.box,
          backgroundColor,

          borderRadius,
          transform: [
            {rotate:animation.interpolate({
              inputRange:[0,1,2],
              outputRange:['0deg','180deg','-180deg']
            })}
            ,{
             translateX : animation.interpolate({
              inputRange: [0, 1,2],
              outputRange: [0,-100,100],
            }),
            },
       
          ],
        }}
      />
      <TouchableOpacity onPress={startAnimation} style={styles.button}>
        <Text>Bắt đầu xoay</Text>
      </TouchableOpacity> */}
      <Animated.FlatList 
      ListHeaderComponent={()=><View style={{height:16}}/>}
        data={list}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={()=><View style={{height:8}}/>}
      onScroll={e=>{const offSetY=e.nativeEvent.contentOffset.y;
        if(offSetY>100&&!showDetail){
          setShowDetail(true)
        
        } else if(offSetY<=100&&showDetail){
          setShowDetail(false)
        }

      }}
      scrollEventThrottle={16}
      refreshControl={          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }
      
      />
      <View style={{flexDirection:'row',position:'absolute',bottom:10,alignSelf:'flex-end',right:10,backgroundColor:'red',height:50,width:'auto',justifyContent:'center',paddingHorizontal:15,borderRadius:15}}>
        <Image source={require('../src/assets/images/firebase-removebg-preview.png')} style={{height:50,width:50 }} resizeMode='contain'/>
       {showDetail? <Text style={{verticalAlign:'middle'}}>show</Text>:<></>}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  box: {
    width: 100,
    height: 100,
    
 
  },
  button: {
    padding: 10,
    backgroundColor: 'pink',
    borderRadius: 5,
  },
});

export default App;
//  tại sao bắt đầu backgroundcolor ko có màu