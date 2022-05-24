import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { getDatabase, ref, set, update, onValue, remove } from "firebase/database";
import { db } from "./components/config"

export default function App() {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');

  function create() {
    set(ref(db, 'users/' + username), {
      username: username,
      email: email,

    }).then(() => {
      alert("data submitted")
    }).catch((error) => {
      alert(error);
    });
  }

  function upd() {
    update(ref(db, 'users/' + username), {
      username: username,
      email: email,

    }).then(() => {
      alert("data updated")
    }).catch((error) => {
      alert(error);
    });
  }


  function readData() {
    const starCountRef = ref(db, 'users/' + username);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setEmail(data.email);

    });
  }


  function deleteData() {
    remove(ref(db, 'users/' + username));
    alert('data deleted')
  }




  return (
    <View style={styles.container}>
      <Text> Firebase Crud ! </Text>
      <TextInput value={username} onChangeText={(username) => { setName(username) }} placeholder='Username' style={{ width: '80%', fontSize: 20, borderWidth: 2, height: 50 }} ></TextInput>
      <TextInput value={email} onChangeText={(email) => { setEmail(email) }} placeholder="Email" style={{ width: '80%', fontSize: 20, borderWidth: 2, height: 50 }}></TextInput>
      <Button
        title="Submit Data"
        onPress={create}
      />
      <Button
        title="Update Data"
        onPress={upd}
      />
      <Button
        title="Read Data"
        onPress={readData}
      />
      <Button
        title="Delete Data"
        onPress={deleteData}
      />





    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
