import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("Imane");
  const [age, setAge] = useState("21");

  const clickHandler = () => {
    setName("Laura");
    setAge("27");
  };

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g. john doe"
        onChangeText={value => setName(value)}
      />
      <Text>Enter age:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="e.g. 21"
        onChangeText={value => setAge(value)}
      />
      <Text>My name is {name}</Text>
      <Text>My age is {age}</Text>

      <View style={styles.buttonContainer}>
        <Button title="update name" onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  buttonContainer: {
    marginTop: 20
  },

  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 5,
    width: 200
  }
  // header: {
  //   backgroundColor: "pink",
  //   padding: 20
  // },

  // boldText: {
  //   fontWeight: "bold"
  // },

  // body: {
  //   backgroundColor: "yellow",
  //   padding: 20
  // }
});
