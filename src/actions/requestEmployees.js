import { fetchEmployees } from "./actions";

export const requestEmployees = () => {
    return dispatch => {
        fetch("https://xsolve-recruitment-task.firebaseio.com/.json")
            .then(res => res.json())
            .then(data => {
                const results = data.employees.map(x => {
                    const [day, month, year, hour] = x.dateOfBirth.split(/\.| /);

                    return {
                        ...x,
                        dateOfBirth: `${year}-${month.length === 1 ? "0" + month : month}-${
                            day.length === 1 ? "0" + day : day
                        } ${hour}`,
                        displayedDate: x.dateOfBirth,
                    };
                });

                dispatch(fetchEmployees(results));
            });
    };
};
