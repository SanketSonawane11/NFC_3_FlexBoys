import {createStore,combineReducers,applyMiddleware} from "redux";
// import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {productDetailReducer, productReducer}  from "./Reducers/productReducer";
import { userReducer } from "./Reducers/userReducer";

const rootReducer = combineReducers({
 products:productReducer,
 productDetail:productDetailReducer,
 user: userReducer,
});

let initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;