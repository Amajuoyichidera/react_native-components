import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, TextInput, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  const fruits = ['apple', 'guava', 'orange', 'paw-paw', 'avacado pear', 'pine-apple', 'lemon',]
 
  const data = [
    {name: 'David', id: 1, age: 20},
    {name: 'sophia', id: 2, age: 22},
    {name: 'bethel', id: 3, age: 24}
  ]

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>My name is {item.name} and i'm {item.age} years old</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
       data={data}
       renderItem={renderItem}
       keyExtractor={item => item.id.toString()}
       />

      <Image style={{height: 100, width: 80, resizeMode: 'cover'}} source={require('./assets/profile.png')} />
      <Text>Hello World!!</Text>
      <Button onPress={() => Alert.alert('button clicked')} title='Click' />
      <TextInput style={{borderColor: inputFocused ? 'blue' : 'black', borderWidth: 1}} onChangeText={setName} value={name} placeholder='Enter name' onFocus={() => setInputFocused(true)} onBlur={() => setInputFocused(false)} />
      
      

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
