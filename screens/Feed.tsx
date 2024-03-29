import {
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import pooki_yellow_background from "../assets/pooki_green_background.png";
import { Card } from "../components/Card";
import { getNotifications } from "../helpers/getNotifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NoItems } from "../components";
import * as Notifications from "expo-notifications";
import { registerForPushNotificationsAsync } from "../helpers/registerForPushNotifications";
import { storePushToken } from "../helpers/storePushToken";
import { useHeaderHeight } from "@react-navigation/elements";

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
  const [isFetching, setIsFetching] = useState(false);
  const headerHeight = useHeaderHeight();
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
    //const address = "0xcB7eA0eC36670AA13088C4372fe8636D4D2b574f";
    setUserAddress(address.toLowerCase());
    const allNotifs = await getNotifications(address.toLowerCase());
    if (allNotifs) {
      setNotifications([]);
      allNotifs.map((notif: Notif) =>
        setNotifications((notifications) => [...notifications, notif])
      );
    }
  };

  useEffect(() => {
    fetchNotifs();
  }, []);

  const onRefresh = async () => {
    setIsFetching(true);
    await fetchNotifs();
    setIsFetching(false);
  };

  const renderItem = ({ item }: any) => (
    <Card content={item.content} date={item.created_at} />
  );

  return (
    <ImageBackground
      source={pooki_yellow_background}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={{ height: headerHeight }}></View>
      <SafeAreaView style={styles.container}>
        {notifications?.length > 0 ? (
          <View
            style={{
              flex: 1,
              alignContent: "center",
              justifyContent: "center",
              padding: 4,
            }}
          >
            <FlatList
              data={notifications.sort((a, b) => b.id - a.id)}
              renderItem={renderItem}
              keyExtractor={(item: any) => item.id}
              onRefresh={() => {
                onRefresh();
              }}
              refreshing={isFetching}
            ></FlatList>
          </View>
        ) : (
          <NoItems />
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  image: {
    flex: 1,
  },
});
