import { createSelector } from "reselect";

import { filterEmployeesSelector } from "./filterEmployees";

export const pagesSelector = createSelector(
    filterEmployeesSelector,
    state => state.pagination,
    (employees, pagination) => {
        const pages = Math.ceil(employees.length / pagination.itemsPerPage);

        return [...Array(pages).keys()];
    },
);
