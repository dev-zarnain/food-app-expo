import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const RecipeDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <View
      style={{
        backgroundColor: item.color,
        flex: 1,
      }}
    >
      <SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ flex: 1 }}
        >
          <FontAwesome name={"arrow-circle-left"} size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name={"heart-o"} size={28} color="#fff" />
        </TouchableOpacity>
      </SafeAreaView>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          marginTop: 140,
          paddingHorizontal: 16,
          borderTopRightRadius: 56,
          borderTopLeftRadius: 56,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: -4, height: -11 },
          shadowOpacity: 0.2,
          shadowRadius: 10,
        }}
      >
        <View
          style={{ width: 300, height: 300, position: "absolute", top: -150 }}
        >
          <Image
            source={item.image}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>
        <Text
          style={{
            marginTop: 160,
            fontSize: 28,
            fontWeight: "bold",
            paddingBottom: 12,
          }}
        >
          {item.name}
        </Text>
        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={{ marginVertical: 16, fontSize: 18 }}>
              {item.description}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View
                style={{
                  backgroundColor: "rgba(255, 0, 0, 0.38)",
                  width: 100,
                  paddingVertical: 26,
                  borderRadius: 8,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 40 }}>⏰</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.time}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "rgba(134, 206, 235, 0.8)",
                  width: 100,
                  paddingVertical: 26,
                  borderRadius: 8,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 40 }}>🥣</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.difficulty}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "rgba(255, 165, 0, 0.38)",
                  width: 100,
                  paddingVertical: 26,
                  borderRadius: 8,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 40 }}>🔥</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.calories}
                </Text>
              </View>
            </View>

            <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
              <Text
                style={{ fontSize: 22, fontWeight: "500", marginBottom: 6 }}
              >
                Ingredients:
              </Text>
              {item.ingredients.map((ingredient, index) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 3,
                    }}
                    key={index}
                  >
                    <View
                      style={{
                        backgroundColor: "red",
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                      }}
                    ></View>
                    <Text style={{ fontSize: 18, marginLeft: 6 }}>
                      {ingredient}
                    </Text>
                  </View>
                );
              })}
            </View>
            <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
              <Text
                style={{ fontSize: 22, fontWeight: "500", marginBottom: 6 }}
              >
                Steps:
              </Text>
              {item.steps.map((step, index) => {
                return (
                  <Text
                    key={index}
                    style={{ fontSize: 18, marginLeft: 6, marginVertical: 6 }}
                  >{`${index + 1}) ${step}`}</Text>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({});
