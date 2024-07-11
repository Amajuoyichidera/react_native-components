import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, TextInput, ScrollView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  const fruits = ['apple', 'guava', 'orange', 'paw-paw', 'avacado pear', 'pine-apple', 'lemon',]
  const [loader, setLoader] = useState(false);

  const data = [
    {name: 'David', age: 20, id: 1},
    {name: 'Jessica', age: 19, id: 2},
    {name: 'peter', age: 21, id: 3}
  ]

  const renderItem = ({item}) => (
    <View>
      <Text>My Name is {item.name} and i'm {item.age} years old</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      
      {loader ? <ActivityIndicator size="large" color="#00ff00" /> : null }
      <Button title='Toggle Loader' onPress={() => setLoader(!loader)} />
      <Image style={{height: 100, width: 80, resizeMode: 'cover'}} source={require('./assets/profile.png')} />
      <Text>Hello World!!</Text>
      <Button onPress={() => Alert.alert('button clicked')} title='Click' />
      <TextInput style={{borderColor: inputFocused ? 'blue' : 'black', borderWidth: 1}} onChangeText={setName} value={name} placeholder='Enter name' onFocus={() => setInputFocused(true)} onBlur={() => setInputFocused(false)} />
      
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id.toString()} /> 
        <TouchableOpacity onPress={() => Alert.alert('TouchableOpacity clicked')}>
          <Text>Click</Text>
        </TouchableOpacity>
      <ScrollView>
        {fruits.map(item => (
          <Text style={{fontSize: 50, lineHeight: 100, textAlign: 'center'}}>
            {item}
          </Text>
        ))}
      </ScrollView>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 100,
    paddingBottom: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 18,
  },
});
