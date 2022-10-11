import { Text, View } from "react-native";
import React from "react";

interface SeparatorProps {
  color?: string;
}

export const Separator: React.FunctionComponent<SeparatorProps> = ({
  color = "#D1FBCD",
}) => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: color,
      }}
    />
  );
};
