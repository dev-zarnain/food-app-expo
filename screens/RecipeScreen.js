import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Header from "../components/Header";
// import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";
import { Feather } from "@expo/vector-icons";
import { colors } from "../Constant";

const RecipeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      <Header headerText={"Hi, Zarnain"} headerIcon={"bell-o"} />
      {/* <SearchFilter
        style={{ padding: 222 }}
        icon="search"
        placeholder={"Enter your favourite recipes"}
      /> */}
      <View
        style={{
          marginTop: 12,
          borderRadius: 8,
          padding: 6,
          alignItems: "center",
          backgroundColor: "white",
          flexDirection: "row",
        }}
      >
        <Feather name="search" size={22} color={colors.COLOR_PRIMARY} />
        <TextInput
          style={{ padding: 8, width: "94%" }}
          placeholder="Enter your fav recipe"
        />
      </View>
      <View style={{ marginTop: 22 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
        <CategoriesFilter />
      </View>
      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold", paddingBottom: 12 }}>
          Recipes
        </Text>
        <RecipeCard />
      </View>
    </SafeAreaView>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({});
