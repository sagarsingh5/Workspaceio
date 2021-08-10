import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DetailScreen from "./src/DetailScreen";
import LoginScreen from "./src/LoginScreen";

export default function App() {
  const [data, setData] = useState(null);
  return (
    <View style={styles.container}>
      {data ? (
        <DetailScreen data={data} setData={setData} />
      ) : (
        <LoginScreen setData={setData} />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
