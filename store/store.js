import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import authenticationReducer from './reducers/authentication'

const middlewares = [];
middlewares.push(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth: authenticationReducer
});

export default createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
)