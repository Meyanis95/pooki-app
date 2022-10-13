import { useWalletConnect } from "@walletconnect/react-native-dapp";
import * as React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { login } from "../helpers/login";
import { storeData } from "../helpers/storeData";

interface ConnectWalletButtonProps {}

function Button({ onPress, label }: any) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

export function ConnectWalletButton({}) {
  const connector = useWalletConnect();
  const connectWallet = React.useCallback(async () => {
    console.log("ici je me connecte");
    console.log("le statut du connector", connector.connected);
    let res = await connector.connect();
    const address = res.accounts[0];
    storeData("user_address", address);
    login(address);
  }, [connector]);

  return <Button onPress={connectWallet} label="Connect Wallet" />;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    borderColor: "#000000",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 100,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  text: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "DMMono-Medium",
  },
});
