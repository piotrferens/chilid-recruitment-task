import { combineReducers } from "redux";

import { employees } from "./reducers/employees";
import { sort } from "./reducers/sort";
import { pagination } from "./reducers/pagination";
import { filter } from "./reducers/filter";

export const rootReducer = combineReducers({
    employees,
    filter,
    pagination,
    sort,
});
