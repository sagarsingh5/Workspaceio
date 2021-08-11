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
import { MaterialCommunityIcons } from "@expo/vector-icons";

const width = Dimensions.get("screen").width;
const circleHeight = width / 5.6;

export default function LoginScreen({ setData }) {
  const [username, setUsername] = useState("DStudio_agency");
  const [password, setPassword] = useState("");
  // console.log(width / 30);
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
        <View style={[styles.input, { backgroundColor: "#FDCD84" }]}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flex: 1,
            }}
          >
            <Text>DStudio_agency</Text>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 30 / 2,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name="lightning-bolt"
                size={24}
                color="black"
              />
            </View>
          </View>
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
              maxWidth: 800,
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
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignSelf: "center",
    maxWidth: 500,
    paddingHorizontal: 15,
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
