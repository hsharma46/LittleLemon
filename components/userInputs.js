import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const UserInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  return (
    <ScrollView indicatorStyle="white" style={style.container}>
      <Text style={style.header}>User Inputs</Text>
      <TextInput
        style={style.inputs}
        placeholder="First Name"
        keyboardType="numeric"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={style.inputs}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={style.inputs}
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
      />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: { flex: 1 },
  header: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  inputs: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#EDEFEE",
  },
});
export default UserInputs;
