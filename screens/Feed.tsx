import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import pooki_yellow_background from "../assets/pooki_green_background.png";
import { Card } from "../components/Card";
import { FontAwesome5 } from "@expo/vector-icons";
import { getNotifications } from "../helpers/getNotifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NoItems } from "../components";
import * as Notifications from "expo-notifications";
import { registerForPushNotificationsAsync } from "../helpers/registerForPushNotifications";
import { storePushToken } from "../helpers/storePushToken";

interface FeedProps {
  navigation: any;
  name: string;
}

interface Notif {
  content: string;
  id: number;
  created_at: string;
  recipient_address: string;
  status: boolean;
  type_id: number;
}

const DATA = [
  {
    id: 1,
    content: "coucou toi !!",
  },
  {
    id: 2,
    content: "coucou toi, t'es sympa !!",
  },
  {
    id: 3,
    content: "coucou toi !!",
  },
];

export const Feed: React.FunctionComponent<FeedProps> = ({
  navigation,
  name,
}) => {
  const [notifications, setNotifications] = useState<Notif[]>([]);
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener: any = useRef();
  const responseListener: any = useRef();
  const [userAddress, setUserAddress] = useState("");
  useEffect(() => {
    registerForPushNotificationsAsync().then((token: any) => {
      setExpoPushToken(token);
      if (userAddress && token) {
        storePushToken(token, userAddress);
      }
    });
    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification: any) => {
        setNotification(notification);
      });
    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });
    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, [userAddress]);

  const fetchNotifs = async () => {
    const address: any = await AsyncStorage.getItem("user_address");
    setUserAddress(address);
    const allNotifs = await getNotifications(address);
    if (allNotifs) {
      allNotifs.map((notif: Notif) =>
        setNotifications((notifications) => [...notifications, notif])
      );
    }
  };

  useEffect(() => {
    fetchNotifs();
  }, []);

  const renderItem = ({ item }: any) => <Card content={item.content} />;

  return (
    <ImageBackground
      source={pooki_yellow_background}
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
          {notifications?.length > 0 ? (
            <FlatList
              data={notifications}
              renderItem={renderItem}
              keyExtractor={(item: any) => item.id}
            ></FlatList>
          ) : (
            <NoItems />
          )}
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
});
