import { fetchEmployees } from "./actions";

export const requestEmployees = () => {
    return dispatch => {
        fetch("https://xsolve-recruitment-task.firebaseio.com/.json")
            .then(res => res.json())
            .then(data => {
                const results = data.employees.map(x => {
                    const date = x.dateOfBirth.split(".");
                    return {
                        ...x,
                        dateOfBirth: [date[1], date[0], date[2]].join("."),
                        displayedDate: x.dateOfBirth,
                    };
                });

                dispatch(fetchEmployees(results));
            });
    };
};
