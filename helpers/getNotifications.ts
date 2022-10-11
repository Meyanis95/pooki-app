import axios from "axios";
import Constants from "expo-constants";
import { BASE_URL } from "@env";

export const getNotifications = async (address: string) => {
  const options = {
    params: { data: address },
  };

  const response = await axios
    .get(`${BASE_URL}/get_notifications`, options)
    .then(async function (response) {
      const { data } = response.data;
      console.log(response);
      console.log("data received", data);
      return data;
    })
    .catch(function (error) {
      console.log("error", error);
    });
  return response;
};
