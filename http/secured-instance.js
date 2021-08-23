import axios from "axios";
import * as SecureStore from "expo-secure-store";

const securedInstance = axios.create();
securedInstance.interceptors.request.use(
  async (config) => {
    const accessToken = await SecureStore.getItemAsync("accessToken");
    config.headers = {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
    };
    return config;
  },
  (error) => Promise.reject(error)
);

export default securedInstance;
