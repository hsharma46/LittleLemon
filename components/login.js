import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ScrollView keyboardDismissMode="on-drag" style={style.container}>
      <Text style={style.header}>Welcome to Little Lemon </Text>
      <Text style={style.subHeader}>Login to Continue</Text>
      <TextInput
        style={style.input}
        value={userName}
        onChangeText={setUserName}
        placeholder="Email"
        keyboardType={'email-address'}
        clearButtonMode='always'
        // onFocus={()=>Alert.alert('Focused')}
        // onBlur={()=>Alert.alert('Blured')}
      />
      <TextInput
        style={style.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: { flex: 1 },
  header: {  padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center', },
  subHeader: { fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center', },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
  },
});

export default Login;
