import * as actionTypes from '../action-types/authentication'

const initialState = {
    isLoading:false,
    currentUser: null,
    error:null,
    isAuthenticated:false,
    authenticationCompleted:false,
    lang: 'en'
}

export default function reducer(state = initialState, action) {

    switch (action.type){
        case actionTypes.BEGIN_AUTHENTICATION:
            return {...state, isLoading:true}
        case actionTypes.AUTHENTICATION_SUCCESSFULL:
            return {...state, isLoading:false,currentUser:action.payload, isAuthenticated:true,authenticationCompleted:true,error:null}
        case actionTypes.AUTHENTICATION_FAILED:
            return {...state, isLoading:false, authenticationCompleted:true,error:action.payload}
        case actionTypes.AUTH_VERIFY_SUCCESS:
            return {...state,isLoading:false,authenticationCompleted:true,isAuthenticated:true,currentUser:action.payload}
        case actionTypes.AUTH_VERIFY_FAILED:{
            return {...state,isLoading:false,authenticationCompleted:true,isAuthenticated:false,currentUser:null}
        }
        case actionTypes.LOGOUT:
            return {...state,isAuthenticated:false,currentUser:null}
        default:
            return state
    }
}