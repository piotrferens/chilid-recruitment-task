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

export const SET_FILTER = "SET_FILTER";
export const setFilter = payload => ({
    type: SET_FILTER,
    payload,
});

export const SET_SEARCH = "SET_SEARCH";
export const setSearch = payload => ({
    type: SET_SEARCH,
    payload,
});
