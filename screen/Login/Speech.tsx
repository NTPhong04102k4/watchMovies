import React, {useState, useEffect} from 'react';
import {Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import Voice, {
  SpeechResultsEvent,
  SpeechErrorEvent,
} from '@react-native-voice/voice';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo ,updateTodo} from '../../src/redux_toolkit/features/todoSlice';

export default function SpeechRecognitionScreen() {
  const [results, setResults] = useState<string[]>([]);
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    // useEffect(() => {
    //   dispatch({ type: 'todos/fetchTodos' });
    // }, [dispatch]);
    
    function onSpeechResults(e: SpeechResultsEvent) {
      setResults(e.value ?? []);
    }

    function onSpeechError(e: SpeechErrorEvent) {
      console.error(e);
    }

    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;

    return function cleanup() {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  async function toggleListening() {
    try {
      if (isListening) {

        await Voice.stop();
        setIsListening(false);
      } else {
        setResults([]);
        await Voice.start('en-US');
        setIsListening(true);
      }
    } catch (e) {
      console.error(e);
    }
  }
const [text,setText]=useState('');
const dispatch = useDispatch();
const todos = useSelector((state:any) => state?.todo?.todos);
const handleAddTodo = () => {
  if (text.trim()) {
    dispatch(addTodo({
      id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      name: text,
    }));
    setText('')
  }
};
function handleUpdateTodo(id:number|string,name:string){

}
const handleDeleteTodo = (id: number | string) => {
  dispatch(deleteTodo(id));
};


  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Enter todo name"
        value={text}
        onChangeText={setText}
      />
      <View style={{flexDirection:'row',justifyContent:'space-between',width:200}}>
      <Button title="Add Todo" onPress={handleAddTodo} />
      <Button title='Get Infor'  />
      {/* <Button title='update' onPress={updateHandle} /> */}

      </View>
   
      <FlatList
        data={todos}
        keyExtractor={(
          item) => item.id.toString()}
        renderItem={({ item ,index}) => (
          <View key={item.id} style={{flexDirection:'row',marginTop:10}}>
          <Text style={{ fontSize: 18, marginVertical: 5,marginRight:50 ,width:200}}>{index}.{' '}{item.name}</Text>
          <Button title='edit' onPress={()=>handleUpdateTodo(item.id,item.name)}/>
          <Button title='del' onPress={()=>handleDeleteTodo(item.id)}/>

          </View>
        )}
      />
      {/* <Text>Press the button and start speaking.</Text> */}
      {/* <Button
        title={isListening ? 'Stop' : 'Start'}
        onPress={toggleListening}
      />
      {results.map((result, index) => (
        <Text key={index}>{result}</Text>
      ))} */}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});