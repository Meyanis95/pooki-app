import React from "react";

import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Dimensions } from "react-native";

import { Feather } from "@expo/vector-icons";

import { ProfileScreen, AboutScreen, FeedScreen, TestScreen } from "../screens";

import SideBar from "./SideBar";

const DrawerNavigator = createDrawerNavigator(
  {
    FeedScreen: {
      screen: FeedScreen,
      navigationOptions: {
        title: "Feed",
        drawerIcon: ({ tintColor }) => (
          <Feather name="info" size={16} color={tintColor} />
        ),
      },
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        title: "Profile",
        drawerIcon: ({ tintColor }) => (
          <Feather name="user" size={16} color={tintColor} />
        ),
      },
    },
    AboutScreen: {
      screen: AboutScreen,
      navigationOptions: {
        title: "About",
        drawerIcon: ({ tintColor }) => (
          <Feather name="info" size={16} color={tintColor} />
        ),
      },
    },
    TestScreen: {
      screen: TestScreen,
      navigationOptions: {
        title: "Test",
        drawerIcon: ({ tintColor }) => (
          <Feather name="info" size={16} color={tintColor} />
        ),
      },
    },
  },
  {
    contentComponent: (props) => <SideBar {...props} />,
    contentOptions: {
      activeBackgroundColor: "rgba(209, 251, 205, 0.1)",
      activeTintColor: "#000",
      itemsContainerStyle: {
        marginTop: 16,
        marginHorizontal: 8,
      },
      itemStyle: {
        borderRadius: 10,
      },
    },
  }
);

const Home = createAppContainer(DrawerNavigator);
export default Home;

// export default function Home() {
//   const connector = useWalletConnect();

//   return <>{connector.connected ? <HomeConnected /> : <HomeNotConnected />}</>;
// }
