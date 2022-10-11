import React from "react";
import { Screen } from "./Screen";
import { Feed } from "./Feed";
import { About } from "./About";
import { Test } from "./Test";

interface ScreenProps {
  navigation: any;
}

export const ProfileScreen: React.FunctionComponent<ScreenProps> = ({
  navigation,
}) => <Screen navigation={navigation} name="Profile" />;
export const AboutScreen: React.FunctionComponent<ScreenProps> = ({
  navigation,
}) => <About navigation={navigation} name="About" />;
export const FeedScreen: React.FunctionComponent<ScreenProps> = ({
  navigation,
}) => <Feed navigation={navigation} name="Feed" />;
export const TestScreen: React.FunctionComponent<ScreenProps> = ({
  navigation,
}) => <Test navigation={navigation} name="Test" />;
