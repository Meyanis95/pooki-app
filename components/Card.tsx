import {
  Text,
  View,
  StyleSheet,
  Image,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";

interface CardProps {
  logo?: string;
  content: string;
}

export const Card: React.FunctionComponent<CardProps> = ({
  logo = "https://images.unsplash.com/photo-1664448288134-669f14c3ebbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  content,
}) => {
  return (
    <View style={styles.container as unknown as StyleProp<ViewStyle>}>
      <Image
        source={{
          uri: logo,
        }}
        style={styles.image}
      />
      <Text style={{ flex: 1 }}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderStyle: "plain",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#EAEAEA",
    backgroundColor: "rgba(235, 235, 235, 0.2)",
    width: "100%",
    height: 80,
    margin: 2,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 100,
    margin: 10,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 1 },
  },
});
