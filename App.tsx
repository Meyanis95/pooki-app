import "./global";

import { Platform } from "react-native";
import WalletConnectProvider from "@walletconnect/react-native-dapp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Landing from "./components/Landing";
import { receiveNotifications } from "./helpers/receiveNotifications";

export default function App() {
  receiveNotifications();
  return (
    <WalletConnectProvider
      redirectUrl={
        Platform.OS === "web" ? window.location.origin : "yourappscheme://"
      }
      storageOptions={{
        asyncStorage: AsyncStorage as any,
      }}
    >
      <Landing />
    </WalletConnectProvider>
  );
}
