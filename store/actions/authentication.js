import * as actionTypes from '../action-types/authentication'
import {API_URL,CLIENT_ID,CLIENT_SECRET} from '@env'
import * as SecureStore from 'expo-secure-store'
import axios from 'axios';

export function authenticate(username,password){
    return async dispatch => {
    
        const loginData = {
            username,
            password,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET
        }
        
        const apiUrl = API_URL + "/authenticate"
        console.log(apiUrl)
        try {
            const {data} = await axios.post(apiUrl,loginData);
            const {access_token,refresh_token} = data;
            await SecureStore.setItemAsync('accessToken',access_token)
            await SecureStore.setItemAsync('refreshToken',refresh_token)
            dispatch({type:actionTypes.AUTHENTICATION_SUCCESSFULL,payload:"testUser"})
        }catch(ex){
            console.log('ex')
            console.log(ex)
            if (!ex.response){
                dispatch({type:actionTypes.AUTHENTICATION_FAILED,payload:"Unexpected error ocurred"})
                return
            }
            dispatch({type:actionTypes.AUTHENTICATION_FAILED,payload:ex.response.data.message})
        }
    }
}

export function verifyAuthentication(){
    return async dispatch => {

        try{
            const token = await SecureStore.getItemAsync('accessToken')
            if (!token){
                dispatch({type:actionTypes.AUTH_VERIFY_FAILED})
                return
            }
            dispatch({type:actionTypes.AUTH_VERIFY_SUCCESS})
        }catch(ex){
            console.log(ex)
        }
    }
}

export function logout(){
    console.log("loging out")
    return async dispatch => {

        try{
            await SecureStore.deleteItemAsync("accessToken")
            dispatch({type:actionTypes.LOGOUT})
        }catch(ex){
            console.log(ex)
        }
    }
}