import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    {
      name: "Midorima",
      id: "1"
    },
    {
      name: "Kuroko",
      id: "2"
    },
    {
      name: "Kagami",
      id: "3"
    },
    {
      name: "Murasakibara",
      id: "4"
    },
    {
      name: "Aomine",
      id: "5"
    },
    {
      name: "Kise",
      id: "6"
    },
    {
      name: "Akashi",
      id: "7"
    }
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={people}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
      {/* <ScrollView>
        {people.map(person => (
          <View key={person.key} style={styles.person}>
            <Text>{person.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    marginTop: 24
    // alignItems: "center",
    // justifyContent: "center"
  },

  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24
  }
});
