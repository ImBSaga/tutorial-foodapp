import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./body.style";
import { icons } from "../../../constants/export";

const Body = () => {
  return (
    <View style={styles.body}>
      <Image source={icons.deliveryIcon} style={styles.deliveryIcon} />
      <View style={styles.addressContainer}>
        <Text style={styles.addressTitle}>Your Delivery Address</Text>
      </View>
      {/* <Text style={styles.addressText}> {displayAddress}</Text> */}
    </View>
  );
};

export default Body;
