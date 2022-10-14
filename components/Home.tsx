import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

import { ProfileScreen, AboutScreen, FeedScreen, TestScreen } from "../screens";
import { View, StyleSheet } from "react-native";

import SideBar from "./SideBar";
import { TouchableOpacity } from "react-native-gesture-handler";

const Drawer = createDrawerNavigator();

const HeaderButton = () => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <View style={styles.buttonHeader}>
        <Feather name="menu" size={22} color={"#000"} />
      </View>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
          headerTransparent: true,
          drawerLabelStyle: {
            marginLeft: -15,
            fontFamily: "DMMono-Medium",
            fontSize: 16,
          },
          drawerActiveBackgroundColor: "rgba(209, 251, 205, 0.3)",
          drawerActiveTintColor: "#000",
          headerTitleStyle: {
            fontFamily: "DMMono-Regular",
            fontSize: 25,
          },
          headerLeft: () => <HeaderButton />,
        }}
        drawerContent={(props: any) => <SideBar {...props} />}
      >
        <Drawer.Screen
          name="Feed"
          component={FeedScreen}
          options={{
            title: "Feed",
            drawerIcon: ({ color }) => (
              <Feather name="bell" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Profile",
            drawerIcon: ({ color }) => (
              <Feather name="user" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: "About",
            drawerIcon: ({ color }) => (
              <Feather name="info" size={22} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// const DrawerNavigator = createDrawerNavigator(
//   {
//     FeedScreen: {
//       screen: FeedScreen,
//       navigationOptions: {
//         title: "Feed",
//         drawerIcon: ({ tintColor }) => (
//           <Feather name="info" size={16} color={tintColor} />
//         ),
//       },
//     },
//     ProfileScreen: {
//       screen: ProfileScreen,
//       navigationOptions: {
//         title: "Profile",
//         drawerIcon: ({ tintColor }) => (
//           <Feather name="user" size={16} color={tintColor} />
//         ),
//       },
//     },
//     AboutScreen: {
//       screen: AboutScreen,
//       navigationOptions: {
//         title: "About",
//         drawerIcon: ({ tintColor }) => (
//           <Feather name="info" size={16} color={tintColor} />
//         ),
//       },
//     },
//     // TestScreen: {
//     //   screen: TestScreen,
//     //   navigationOptions: {
//     //     title: "Test",
//     //     drawerIcon: ({ tintColor }) => (
//     //       <Feather name="info" size={16} color={tintColor} />
//     //     ),
//     //   },
//     // },
//   },
//   {
//     contentComponent: (props) => <SideBar {...props} />,
//     contentOptions: {
//       activeBackgroundColor: "rgba(209, 251, 205, 0.1)",
//       activeTintColor: "#000",
//       itemsContainerStyle: {
//         marginTop: 16,
//         marginHorizontal: 8,
//       },
//       itemStyle: {
//         borderRadius: 10,
//       },
//     },
//   }
// );

// const Home = createAppContainer(DrawerNavigator);
// export default Home;

// export default function Home() {
//   const connector = useWalletConnect();

//   return <>{connector.connected ? <HomeConnected /> : <HomeNotConnected />}</>;
// }
const styles = StyleSheet.create({
  buttonHeader: {
    backgroundColor: "#FFF",
    width: 40,
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
  },
});
