import { StyleSheet, Text, View } from "react-native";

const LittleLemonFooter = () => {
  return (
    <View style={style.container}>
      <Text style={style.footer}>
        All rights reserved by Little Lemon, {new Date().getFullYear()}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#EE9972",
    marginBottom: 4,
  },
  footer: { textAlign: "center",fontWeight:"bold", fontSize: 20, color: "black",fontStyle:"italic" },
});

export default LittleLemonFooter;
