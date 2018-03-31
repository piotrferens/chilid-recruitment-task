import { combineReducers } from "redux";

import { employees } from "./reducers/employees";

export const rootReducer = combineReducers({
    employees,
});
