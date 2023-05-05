import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./main.style";
import { icons } from "../../../constants/export";

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navigation} />

      <View style={styles.body}>
        <Image source={icons.deliveryIcon} style={styles.deliveryIcon} />
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>Your Delivery Address</Text>
        </View>
        {/* <Text style={styles.addressText}> {displayAddress}</Text> */}
      </View>
      <View style={styles.footer} />
    </View>
  );
};

export default Main;
