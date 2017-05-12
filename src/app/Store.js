import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import combinedReducers from "../reducers/appReducers";

export function initStore(initialState = {}) {
    const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)  ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
    return createStore(combinedReducers, initialState, composeEnhancers(applyMiddleware(thunk)));
}