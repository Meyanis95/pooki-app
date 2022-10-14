import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import pooki_green_background from "../assets/pooki_green_background.png";
import { useHeaderHeight } from "@react-navigation/elements";

interface AboutProps {
  navigation: any;
  name: string;
}

export const About: React.FunctionComponent<AboutProps> = ({
  navigation,
  name,
}) => {
  const headerHeight = useHeaderHeight();
  return (
    <ImageBackground
      source={pooki_green_background}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={{ height: headerHeight }}></View>
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.box}>
            <Text style={styles.text}>
              Pooki is notification app linked to your wallet!
            </Text>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  text: {
    //alignItems: "center",
    textAlign: "center",
    fontSize: 20,
  },
  box: {
    flex: 1,
    justifyContent: "space-around",
  },
});
