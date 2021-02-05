import { combineReducers, compose, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import dataReducer from "./reducers/dataReducer";

const initialState = {};
const middleware = [thunk];

const reducers = combineReducers({
    data: dataReducer,
});

const composeEnhacers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhacer = composeEnhacers(applyMiddleware(...middleware));

const store = createStore(reducers, initialState, enhacer);

export default store;
