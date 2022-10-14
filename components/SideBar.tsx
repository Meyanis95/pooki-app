import React from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  View,
} from "react-native";
import drawer_bg from "../assets/drawer_bg.png";
import { DisconnectWalletButton } from "./DisconnectWalletButton";
import { useWalletConnect } from "@walletconnect/react-native-dapp";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(
    address.length - 4,
    address.length
  )}`;
};

export default function SideBar(props: any) {
  const connector = useWalletConnect();
  return (
    <>
      <ImageBackground
        source={drawer_bg}
        style={{ width: undefined, padding: 16, paddingTop: 48 }}
      >
        <Image source={drawer_bg} style={styles.profile} />
        <Text style={styles.name}>
          {connector.connected && shortenAddress(connector.accounts[0])}
        </Text>
      </ImageBackground>
      <DrawerContentScrollView
        contentContainerStyle={{
          paddingTop: -10,
        }}
        {...props}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.button}>
        <DisconnectWalletButton />
      </View>
    </>
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
    fontFamily: "DMMono-Medium",
  },
  button: {
    // flex: 1,
    // width: "90%",
    // alignSelf: "center",
    // justifyContent: "flex-end",
    // marginBottom: 40,
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#E4E4E4",
  },
});
