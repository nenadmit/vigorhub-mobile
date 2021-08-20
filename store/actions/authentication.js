import * as actionTypes from '../action-types/authentication'
import {API_URL} from '@env'

export function authenticate(username,password){
    return async dispatch => {
        const loginPayload = {
            username,
            password,
            client_id: 'vigorhub_app',
            client_secret: 'dreadw4r'
        }
        try {
            // const {data} = axios.post("http://localhost:3000/authenticate",loginPayload);
            // const {access_token,refresh_token} = data;
            console.log(loginPayload)
            console.log(API_URL,"API URL")
            const testUser = {
                _id: "2342dko2dk2fe2",
                email: "nenadmit@outlook.com",
                first_name: "Nenad",
                last_name: "Mitkovic",
                account_type: "owner"
            }
            dispatch({type:actionTypes.AUTHENTICATION_SUCCESSFULL,payload:testUser})
        }catch(ex){
            if (!ex.response){
                dispatch({type:actionTypes.AUTHENTICATION_FAILED,payload:"Unexpected error ocurred"})
                return
            }
            dispatch({type:actionTypes.AUTHENTICATION_FAILED,payload:ex.response.data.message})
        }
    }
}