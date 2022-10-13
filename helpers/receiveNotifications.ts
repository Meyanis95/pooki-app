import { supabase } from "./supabase";
import { sendPushNotification } from "./sendPushNotification";

export async function receiveNotifications() {
  try {
    const mySubscription = supabase
      .channel("*")
      .on(
        "public:notifications",
        { event: "INSERT", schema: "public", table: "notifications" },
        (payload: any) => {
          console.log("Change received!", payload);
        }
      )
      .subscribe();
    return mySubscription;
  } catch (error) {
    console.log(error);
  }
}
