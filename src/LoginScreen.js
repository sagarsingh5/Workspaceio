import React, { useState } from "react";
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const width = Dimensions.get("screen").width;
const circleHeight = width / 5.6;

export default function LoginScreen({ setData }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(width / circleHeight);
  return (
    <View style={styles.container}>
      <View>
        <View style={{ overflow: "hidden" }}>
          <View style={styles.circle} />
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.bold}>Hey,</Text>
          <Text style={styles.bold}>Login Now.</Text>
        </View>
        <Text style={{ color: "#a9a9a9", marginTop: 20 }}>
          If you are new/
          <Text style={{ fontSize: 16, color: "#000" }}> Create New</Text>
        </Text>
      </View>
      <View>
        <View style={styles.input}>
          <TextInput
            placeholder="Username"
            onChangeText={(e) => setUsername(e)}
            style={{ flex: 1 }}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder="Password"
            secureTextEntry
            onChangeText={(e) => setPassword(e)}
            style={{ flex: 1 }}
          />
        </View>
        <Text
          style={{
            color: "#a9a9a9",

            marginTop: 20,
          }}
        >
          Forgot Passcode?/
          <Text style={{ fontSize: 16, color: "#000" }}> Reset</Text>
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => setData({ username, password })}
          disabled={username && password ? false : true}
          style={[
            styles.input,
            {
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#B12442",
            },
          ]}
        >
          <Text style={{ fontSize: 20, color: "#fff" }}>Login</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "#a9a9a9",
            textAlign: "center",
            fontSize: 16,
            marginTop: 10,
          }}
        >
          Skip Now
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
    padding: 40,
    justifyContent: "space-between",
    // justifyContent: "center",
  },
  input: {
    width: "100%",
    height: 60,
    backgroundColor: "#e6e6e6",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  bold: {
    fontSize: 30,
    fontWeight: "bold",
  },
  circle: {
    height: circleHeight,
    width: circleHeight,
    borderRadius: circleHeight / 2,
    backgroundColor: "#000",
    left: -circleHeight / 2,
  },
});
