export const FETCH_EMPLOYEES = "FETCH_EMPLOYEES";
export const fetchEmployees = payload => ({
    type: FETCH_EMPLOYEES,
    payload,
});

export const requestEmployees = () => {
    return dispatch => {
        fetch("https://xsolve-recruitment-task.firebaseio.com/.json")
            .then(res => res.json())
            .then(data => dispatch(fetchEmployees(data)));
    };
};
