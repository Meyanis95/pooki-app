import { Text, View, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import pooki_yellow_background from "../assets/pooki_yellow_background.png";
import { ConnectWalletButton } from "./ConnectWalletButton";
import { DisconnectWalletButton } from "./DisconnectWalletButton";

interface HomeNotConnectedProps {}

export const LoginScreen = ({}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={pooki_yellow_background}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.center}>
          <Text style={styles.text}>Welcome to Pooki.</Text>
          <ConnectWalletButton />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontFamily: "DMMono-Light",
    fontSize: 30,
    marginBottom: 80,
  },
});
