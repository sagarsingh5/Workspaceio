import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function DetailScreen({ setData, data }) {
  //   console.log(data);
  return (
    <View style={styles.container}>
      <Text>Username: {data.username}</Text>
      <Text>Password: {data.password}</Text>
      <Button title="logout" onPress={() => setData(null)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
