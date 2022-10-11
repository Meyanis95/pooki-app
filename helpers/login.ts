import axios from "axios";
import { storeData } from "./storeData";
import { BASE_URL } from "@env";

interface ResponseType {
  id: number;
  newaccount: boolean;
}

export const login = async (address: string) => {
  console.log("Verifying your account, with the following addres:", address);
  const options = {
    params: { data: address },
  };

  const response: ResponseType | void = await axios
    .get(`${BASE_URL}/login`, options)
    .then(async function (response) {
      const { id, newaccount } = response.data;
      storeData("user_id", id);
      return { id, newaccount };
    })
    .catch(function (error) {
      console.log("erreur", error);
    });

  if (response?.newaccount === true) {
    console.log("nouveau compte");
  }
};
