import { createSelector } from "reselect";
import { sortBy } from "lodash";

export const sortEmployeesSelector = createSelector(
    state => state.employees,
    state => state.sort,
    (employees, sort) =>
        sortBy(
            employees,
            employee => (sort === "dateOfBirth" ? new Date(employee.dateOfBirth) : employee[sort]),
        ),
);
