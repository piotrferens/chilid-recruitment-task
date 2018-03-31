import { createSelector } from "reselect";

import { sortEmployeesSelector } from "./sortEmployees";

export const actualEmployeesSelector = createSelector(
    sortEmployeesSelector,
    state => state.pagination,
    (employees, pagination) =>
        employees.slice(
            pagination.actualPage * pagination.itemsPerPage,
            pagination.itemsPerPage * (pagination.actualPage + 1),
        ),
);
