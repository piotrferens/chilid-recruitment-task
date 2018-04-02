import { createSelector } from "reselect";
import { orderBy } from "lodash";

import { filterEmployeesSelector } from "./filterEmployees";

export const sortEmployeesSelector = createSelector(
    filterEmployeesSelector,
    state => state.sort,
    (employees, sort) =>
        orderBy(
            employees,
            employee =>
                sort.by === "dateOfBirth" ? new Date(employee.dateOfBirth) : employee[sort.by],
            sort.order === 1 ? "asc" : "desc",
        ),
);
