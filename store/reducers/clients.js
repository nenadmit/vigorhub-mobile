import * as actionTypes from '../action-types/clients'

const initialState = {
    isLoading:false,
    clients:[],
    error:null,
    invitedClient:null,
}

export default function Reducer(state = initialState,action){

    switch (action.type){
        case actionTypes.BEGIN_CLIENTS_REQUEST:
            return beginRequest(state)
        case actionTypes.CREATE_CLIENT_SUCCESS:
            return createClientSuccess(state,action)
        case actionTypes.FETCH_CLIENTS_SUCCESS:
            return fetchClientsSuccess(state,action)
        case actionTypes.FETCH_CLIENTS_ERROR:
            return fetchError(state,action)
        case actionTypes.CLEAR_CLIENTS_STATE:
            return clearState(state)
        default:
            return state
    }
}

function createClientSuccess(state,action){
    const invitedClient = action.payload
    clients = [...state.clients,invitedClient]
    return {...state,clients,isLoading:false,error:null,invitedClient}
}

function fetchClientsSuccess(state,action){
    return {...state,clients:action.payload,isLoading:false,error:null}
}
function fetchError(state,action){
    return {...state,error:action.payload}
}
function clearState(state){
    return {...state,isLoading:false,error:null,invitedClient:null}
}

function beginRequest(state){
    return {isLoading:true,...state}
}
