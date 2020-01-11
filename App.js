import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView
} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    {
      name: "Midorima",
      key: "1"
    },
    {
      name: "Kuroko",
      key: "2"
    },

    {
      name: "Kagami",
      key: "3"
    },
    {
      name: "Murasakibara",
      key: "4"
    },
    {
      name: "Aomine",
      key: "5"
    },
    {
      name: "Kise",
      key: "6"
    },
    {
      name: "Akashi",
      key: "7"
    }
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map(person => (
          <View key={person.key} style={styles.person}>
            <Text>{person.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: "center",
    // justifyContent: "center"
  },

  person: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24
  }
});
