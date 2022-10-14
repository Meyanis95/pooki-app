import React from "react";
import { Screen } from "./Screen";
import { Feed } from "./Feed";
import { About } from "./About";
import { Profile } from "./Profile";

interface ScreenProps {
  navigation: any;
}

export const ProfileScreen: React.FunctionComponent<ScreenProps> = ({
  navigation,
}) => <Profile navigation={navigation} name="Profile" />;
export const AboutScreen: React.FunctionComponent<ScreenProps> = ({
  navigation,
}) => <About navigation={navigation} name="About" />;
export const FeedScreen: React.FunctionComponent<ScreenProps> = ({
  navigation,
}) => <Feed navigation={navigation} name="Feed" />;
