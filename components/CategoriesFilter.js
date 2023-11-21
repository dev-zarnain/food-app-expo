import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { categories, colors } from "../Constant";

const CategoriesFilter = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => {
          return (
            <TouchableOpacity
              key={category.id}
              style={{
                backgroundColor:
                  index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
                marginRight: 6,
                marginVertical: 16,
                paddingHorizontal: 16,
                paddingVertical: 10,
                borderRadius: 8,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
              }}
            >
              <Text
                style={{
                  color: index === 0 && colors.COLOR_LIGHT,
                  fontSize: 18,
                }}
              >
                {category.category}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoriesFilter;

const styles = StyleSheet.create({});
