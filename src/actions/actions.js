export const FETCH_EMPLOYEES = "FETCH_EMPLOYEES";
export const fetchEmployees = payload => ({
    type: FETCH_EMPLOYEES,
    payload,
});

export const SET_SORT = "SET_SORT";
export const setSort = payload => ({
    type: SET_SORT,
    payload,
});

export const SET_PAGE = "SET_PAGE";
export const setPage = payload => ({
    type: SET_PAGE,
    payload,
});
