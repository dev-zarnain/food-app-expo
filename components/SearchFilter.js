import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const SearchFilter = ({ icon, placeholder }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flexDirection: "row",
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginVertical: 16,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
      }}
    >
      <FontAwesome name={icon} size={20} color="#f96163" />
      <TextInput
        style={{ color: "#808080", paddingLeft: 8, fontSize: 16 }}
        placeholder="Enter your fav recipe"
      />
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({});
