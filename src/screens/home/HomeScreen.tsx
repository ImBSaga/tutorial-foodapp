import React from "react";
import { View, StyleSheet } from "react-native";

import { HomeHeader, HomeBody, HomeFooter } from "../../components";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <HomeBody />
      <HomeFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(242,242,242,1)",
  },
});
