import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";

//Location
import * as Location from "expo-location";

//Navigation
import { useNavigation } from "../../../utils";

import styles from "./body.style";
import { icons } from "../../../constants";

const Body = () => {
  //Location
  const [errorMsg, setErrorMsg] = useState("");
  const [address, setAddress] = useState<Location.LocationGeocodedAddress>();
  const [displayAddress, setDisplayAddress] = useState(
    "Waiting for Current Location"
  );

  //Navigation
  const { navigate } = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location is not granted");
      }

      let location: any = await Location.getCurrentPositionAsync({});
      const { coords } = location;

      if (coords) {
        const { latitude, longitude } = coords;
        let addressResponse: any = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });

        for (let item of addressResponse) {
          // console.log(item);
          setAddress(item);
          // onUpdateLocation(item)
          let currentAddress = `${item.name},${item.street}, ${item.postalCode}, ${item.country}`;
          setDisplayAddress(currentAddress);

          if (currentAddress.length > 0) {
            setTimeout(() => {
              navigate("homeStack");
            }, 2000);
          }

          return;
        }
      } else {
        //notify user something went wrong with location
      }
    })();
  }, []);

  return (
    <View style={styles.body}>
      <Image source={icons.deliveryIcon} style={styles.deliveryIcon} />
      <View style={styles.addressContainer}>
        <Text style={styles.addressTitle}>Your Delivery Address</Text>
      </View>
      <Text style={styles.addressText}> {displayAddress}</Text>
    </View>
  );
};

export default Body;
