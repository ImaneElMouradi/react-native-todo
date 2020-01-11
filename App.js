import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("Imane");

  const clickHandler = () => {
    setName("amine");
  };

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text></Text>

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
