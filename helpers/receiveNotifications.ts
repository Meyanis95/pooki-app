import { supabase } from "./supabase";
import { sendPushNotification } from "./sendPushNotification";

export async function receiveNotifications() {
  try {
    const mySubscription = await supabase
      .channel("public:notifications")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "notifications" },
        (payload: any) => {
          console.log("Change received!", payload);
          //sendPushNotification(expoPushToken);
        }
      )
      .subscribe();
    return mySubscription;
  } catch (error) {
    console.log(error);
  }
}
