import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ alignItems: "center" }}>
      <Image
        source={require("../assets/images/welcome1.png")}
        resizeMode="contain"
        style={{ width: "100%", height: "70%" }}
      />
      <Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bold" }}>
        40k+ Premium Recipes
      </Text>
      <Text
        style={{
          color: "#3c444c",
          fontSize: 42,
          fontWeight: "bold",
          marginTop: 34,
          marginBottom: 44,
        }}
      >
        Cook Like A Chief
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Recipe")}
        style={{
          backgroundColor: "#006A4E",
          borderRadius: 14,
          paddingVertical: 18,
          width: "80%",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>
          Let's Go
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
