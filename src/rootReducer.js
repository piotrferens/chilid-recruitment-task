import { combineReducers } from "redux";

import { employees } from "./reducers/employees";
import { sort } from "./reducers/sort";
import { pagination } from "./reducers/pagination";

export const rootReducer = combineReducers({
    employees,
    sort,
    pagination,
});
