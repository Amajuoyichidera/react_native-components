import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, TextInput, ScrollView, FlatList, TouchableOpacity, ActivityIndicator, ImageBackground, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Modal } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  const fruits = ['apple', 'guava', 'orange', 'paw-paw', 'avacado pear', 'pine-apple', 'lemon',]
  const [loader, setLoader] = useState(false);
  const [modalOpen, setModalOpen] = useState(false)

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


  const renderHeader = () => (
    <>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <TextInput
              style={{ borderColor: inputFocused ? 'blue' : 'black', borderWidth: 1, margin: 10 }}
              onChangeText={setName}
              value={name}
              placeholder='Enter name'
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      
      {loader ? <ActivityIndicator size="large" color="#00ff00" /> : null }
      <Button title='Toggle Loader' onPress={() => setLoader(!loader)} />
      <Image style={{ height: 100, width: 80, resizeMode: 'cover' }} source={require('./assets/profile.png')} />
      <Modal visible={modalOpen} onRequestClose={() => setModalOpen(false)}>
       <Text>Hello World!!</Text>
      </Modal>
      <TouchableOpacity onPress={() => setModalOpen(true)}>
        <Text>Open Modal</Text>
      </TouchableOpacity>
      <Button title='Close Modal' onPress={() => setModalOpen(false)} />
    </>
  );

  const renderFooter = () => (
    <>
      <ImageBackground source={require('./assets/bg.jpg')}>
      <Button onPress={() => Alert.alert('button clicked')} title='Click' />
        <ScrollView style={styles.overlay}>
          {fruits.map(item => (
            <Text key={item} style={{ fontSize: 50, lineHeight: 100, textAlign: 'center', color: 'white' }}>
              {item}
            </Text>
          ))}
        </ScrollView>
      </ImageBackground>
    </>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 100,
    paddingBottom: 50,
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
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
  },
});
