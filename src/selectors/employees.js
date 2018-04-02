import { createSelector } from "reselect";

import { sortEmployeesSelector } from "./sortEmployees";

export const employeesSelector = createSelector(
    sortEmployeesSelector,
    state => state.pagination,
    (employees, pagination) =>
        employees.slice(
            pagination.page * pagination.itemsPerPage,
            pagination.itemsPerPage * (pagination.page + 1),
        ),
);
