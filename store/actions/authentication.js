import * as actionTypes from "../action-types/authentication";
import { API_URL, CLIENT_ID, CLIENT_SECRET } from "@env";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import jwtDecode from "jwt-decode";

export function authenticate(username, password) {
  return async (dispatch) => {
    const loginData = {
      username,
      password,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    };

    const apiUrl = API_URL + "/authenticate";
    console.log(apiUrl);
    try {
      const { data } = await axios.post(apiUrl, loginData);
      const { access_token, refresh_token, id_token } = data;
      await SecureStore.setItemAsync("accessToken", access_token);
      await SecureStore.setItemAsync("refreshToken", refresh_token);
      await SecureStore.setItemAsync("idToken",id_token);
      const currentUser = await getCurrentUserFromIdToken(id_token)

      dispatch({
        type: actionTypes.AUTHENTICATION_SUCCESSFULL,
        payload: currentUser,
      });
    } catch (ex) {
      if (!ex.response) {
        dispatch({
          type: actionTypes.AUTHENTICATION_FAILED,
          payload: "Unexpected error ocurred",
        });
        return;
      }
      dispatch({
        type: actionTypes.AUTHENTICATION_FAILED,
        payload: ex.response.data.message,
      });
    }
  };
}

export function verifyAuthentication() {
  return async (dispatch) => {
    try {
      const token = await SecureStore.getItemAsync("accessToken");
      if (!token) {
        dispatch({ type: actionTypes.AUTH_VERIFY_FAILED });
        return;
      }
      const currentUser = await getCurrentUserFromIdToken()
      dispatch({ type: actionTypes.AUTH_VERIFY_SUCCESS,payload:currentUser });
    } catch (ex) {
      console.log(ex);
    }
  };
}

export function logout() {
  return async (dispatch) => {
    try {
      await SecureStore.deleteItemAsync("accessToken");
      dispatch({ type: actionTypes.LOGOUT });
    } catch (ex) {
      console.log(ex);
    }
  };
}
// TODO GET CURRENT USER DATA FROM ID TOKEN
async function getCurrentUserFromIdToken(idToken) {

    let token = null;
    if (!idToken){
       token = await SecureStore.getItemAsync("idToken") 
    }else{
        token = idToken
    }
    const userdata = jwtDecode(token);
    const {id,first_name,last_name,email,account_type} = userdata;
    return {
        id,
        firstName: first_name,
        lastName: last_name,
        email,
        accountType: account_type,
      };
}
