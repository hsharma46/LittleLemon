import { StyleSheet, Text, View } from "react-native";

const LittleLemonHeader = () => {
  return (
    <View style={style.container}>
      <Text style={style.header}>Little Lemon</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: "#EE9972",
    justifyContent: "center",
    alignItems: "center",
  },
  header: { fontWeight: "bold", fontSize: 30, color: "black" },
});

export default LittleLemonHeader;
