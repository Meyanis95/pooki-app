import axios from "axios";
import { BASE_URL } from "@env";

export async function storePushToken(pushToken: string, address: string) {
  const options = {
    params: { pushToken: pushToken, address: address },
  };

  const response = await axios
    .get(`${BASE_URL}store_push_token`, options)
    .then(async function (response) {
      const { data } = response.data;
      return { data };
    })
    .catch(function (error) {
      console.log("error", error);
    });
  return response;
}
