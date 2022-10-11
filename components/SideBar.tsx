import React from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  View,
} from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import drawer_bg from "../assets/drawer_bg.png";
import { DisconnectWalletButton } from "./DisconnectWalletButton";
import { useWalletConnect } from "@walletconnect/react-native-dapp";

const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(
    address.length - 4,
    address.length
  )}`;
};

export default function SideBar(props: any) {
  const connector = useWalletConnect();
  return (
    <ScrollView>
      <ImageBackground
        source={drawer_bg}
        style={{ width: undefined, padding: 16, paddingTop: 48 }}
      >
        <Image source={drawer_bg} style={styles.profile} />
        <Text style={styles.name}>
          {connector.connected && shortenAddress(connector.accounts[0])}
        </Text>
      </ImageBackground>

      <View style={styles.container}>
        <DrawerNavigatorItems {...props} />
      </View>
      <View style={styles.button}>
        <DisconnectWalletButton />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#000000",
  },
  name: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 8,
  },
  button: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
    justifyContent: "flex-end",
  },
});
