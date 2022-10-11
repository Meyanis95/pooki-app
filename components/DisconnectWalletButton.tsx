import { useWalletConnect } from "@walletconnect/react-native-dapp";
import * as React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface DisconnectWalletButtonProps {}

function Button({ onPress, label }: any) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

export function DisconnectWalletButton({}) {
  const connector = useWalletConnect();

  const killSession = React.useCallback(() => {
    return connector.killSession();
  }, [connector]);

  return <Button onPress={killSession} label="Log out" />;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    borderColor: "#FFCDCD",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 100,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  text: {
    color: "#FFCDCD",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
