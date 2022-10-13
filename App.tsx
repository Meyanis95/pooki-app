import "./global";
import { Platform, View, Text, StyleSheet } from "react-native";
import WalletConnectProvider from "@walletconnect/react-native-dapp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Landing from "./components/Landing";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useCallback } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    "DMMono-Italic": require("./assets/fonts/DMMono-Italic.ttf"),
    "DMMono-Light": require("./assets/fonts/DMMono-Light.ttf"),
    "DMMono-LightItalic": require("./assets/fonts/DMMono-LightItalic.ttf"),
    "DMMono-Medium": require("./assets/fonts/DMMono-Medium.ttf"),
    "DMMono-MediumItalic": require("./assets/fonts/DMMono-MediumItalic.ttf"),
    "DMMono-Regular": require("./assets/fonts/DMMono-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <WalletConnectProvider
      redirectUrl={
        Platform.OS === "web" ? window.location.origin : "yourappscheme://"
      }
      storageOptions={{
        asyncStorage: AsyncStorage as any,
      }}
    >
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Landing />
      </View>
    </WalletConnectProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
