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
import { FontAwesome5 } from "@expo/vector-icons";

interface AboutProps {
  navigation: any;
  name: string;
}

export const Profile: React.FunctionComponent<AboutProps> = ({
  navigation,
  name,
}) => {
  return (
    <ImageBackground
      source={pooki_green_background}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ alignItems: "flex-end", margin: 16 }}
            onPress={navigation.openDrawer}
          >
            <FontAwesome5 name="bars" size={24} color="#161924" />
          </TouchableOpacity>

          <View style={styles.box}>
            <Text style={styles.text}>Your profile page</Text>
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
