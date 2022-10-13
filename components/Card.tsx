import {
  Text,
  View,
  StyleSheet,
  Image,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";
import { timeSince } from "../helpers/timeSince";
import { SimpleLineIcons } from "@expo/vector-icons";

interface CardProps {
  logo?: string;
  content: string;
  date: string;
}

const WalletIcon = () => {
  return (
    <View style={styles.icon}>
      <SimpleLineIcons name="wallet" size={20} color="black" />
    </View>
  );
};

export const Card: React.FunctionComponent<CardProps> = ({
  logo,
  content,
  date,
}) => {
  return (
    <View style={styles.container as unknown as StyleProp<ViewStyle>}>
      {logo ? (
        <Image
          source={{
            uri: logo,
          }}
          style={styles.image}
        />
      ) : (
        <WalletIcon />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.date}>{timeSince(date)}</Text>
        <Text>{content}</Text>
      </View>
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
    marginVertical: 1,
    padding: 8,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    marginVertical: 1,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 100,
    margin: 5,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 100,
    margin: 5,
    shadowRadius: 4,
    backgroundColor: "#FFF",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
  },
  date: {
    position: "absolute",
    flexDirection: "row",
    alignSelf: "flex-end",
    color: "#878585",
    fontSize: 12,
    right: 0,
    top: 0,
  },
});
