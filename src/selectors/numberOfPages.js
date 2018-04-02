import { createSelector } from "reselect";

import { filterEmployeesSelector } from "./filterEmployees";

export const numberOfPagesSelector = createSelector(
    filterEmployeesSelector,
    state => state.pagination,
    (employees, pagination) => Math.ceil(employees.length / pagination.itemsPerPage),
);
