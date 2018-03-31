import { createStore, applyMiddleware, compose } from "redux";

import { rootReducer } from "./rootReducer";

const middleware = [];

const reduxDevtool =
    process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

const enhancer = reduxDevtool(applyMiddleware(...middleware));
export const store = createStore(rootReducer, enhancer);
