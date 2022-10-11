import { Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

export const NoItems: React.FunctionComponent = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.text}>There is no notifications here :(</Text>
    </SafeAreaView>
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
    alignItems: "center",
    textAlign: "center",
    fontSize: 20,
  },
});
