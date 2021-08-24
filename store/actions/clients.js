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

export function inviteClient(invitedUser) {
  return async (dispatch,getState) => {
    try {
      const state = getState();
      const currentUserID = state.auth.currentUser.id

      const { email, firstName, lastName } = invitedUser;
      const payload = {
        first_name: firstName,
        last_name: lastName,
        email,
      };

      const url = `${API_URL}/api/v1/accounts/${currentUserID}/clients`;
      const { data } = await http.post(url, payload);

      dispatch({
        type: actionTypes.CREATE_CLIENT_SUCCESS,
        payload: data,
      });
    } catch (ex) {
      console.log("ERROR CREATING USER")
      dispatch(dispatchErr(ex));
    }
  };
}

export function clearState(){
  return dispatch => {
    dispatch({
      type:actionTypes.CLEAR_CLIENTS_STATE
    })
  }
}

function dispatchErr(error) {

  let errorMsg = "";
  if (error.response){
    errorMsg = error.response.data.message
  }else{
    errorMsg = "unexpected_server_error"
  }
  console.log(error.response)

  return {
    type: actionTypes.FETCH_CLIENTS_ERROR,
    payload: errorMsg,
  };
}
