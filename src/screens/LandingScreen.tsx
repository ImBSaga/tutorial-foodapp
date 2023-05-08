import React from "react";
import { View, StyleSheet } from "react-native";

import { LandingHeader, LandingBody, LandingFooter } from "../components";

export const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <LandingHeader />
      <LandingBody />
      <LandingFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(242,242,242,1)",
  },
});
