import * as actionTypes from "../action-types/clients";
import { API_URL } from "@env";
import http from "../../http/secured-instance";

export function fetchClients(currentUserID) {
  return async (dispatch) => {
    try {
      const url = `${API_URL}/api/v1/accounts/${currentUserID}/clients`;
      const { data } = await http.get(url);
      dispatch({
        type: actionTypes.FETCH_CLIENTS_SUCCESS,
        payload: data,
      });
    } catch (ex) {
      dispatch(dispatchErr(ex));
    }
  };
}

export function inviteClient(currentUserID, invitedUser) {
  return (dispatch) => {
    try {
      const { email, firstName, lastName } = invitedUser;
      const payload = {
        first_name: firstName,
        lastName: lastName,
        email,
      };

      const url = `${API_URL}/api/v1/accounts/${currentUserID}/clients`;
      const { data } = await http.post(url, payload);

      dispatch({
        type: actionTypes.CREATE_CLIENT_SUCCESS,
        payload: data,
      });
    } catch (ex) {
      dispatch(dispatchErr(ex));
    }
  };
}
function dispatchErr(error) {
  return {
    type: actionTypes.FETCH_CLIENTS_ERROR,
    payload: errorKey,
  };
}
