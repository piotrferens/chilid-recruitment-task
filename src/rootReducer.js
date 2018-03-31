import { combineReducers } from "redux";

import { employees } from "./reducers/employees";
import { sort } from "./reducers/sort";

export const rootReducer = combineReducers({
    employees,
    sort,
});
