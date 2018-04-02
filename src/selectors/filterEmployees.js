import { createSelector } from "reselect";

export const filterEmployeesSelector = createSelector(
    state => state.employees,
    state => state.filter,
    (employees, filter) =>
        employees.filter(
            e =>
                filter.selected && filter.searchPhrase
                    ? `${e[filter.selected]}`
                          .toLowerCase()
                          .includes(filter.searchPhrase.toLowerCase())
                    : true,
        ),
);
