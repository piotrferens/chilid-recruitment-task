import { fetchEmployees } from "./actions";

export const requestEmployees = () => {
    return dispatch => {
        fetch("https://chilid-recruitment-task.firebaseio.com/.json")
            .then(res => res.json())
            .then(data => {
                const results = data.employees.map(x => {
                    const [day, month, year, hour] = x.dateOfBirth.split(/\.| /);
                    const dateOfBirth = `${year}-${month.length === 1 ? "0" + month : month}-${
                        day.length === 1 ? "0" + day : day
                    } ${hour}`;
                    return {
                        ...x,
                        dateOfBirth: dateOfBirth,
                        displayedDate: new Date(dateOfBirth)
                            .toUTCString()
                            .split(/,| /)
                            .slice(2, 5)
                            .join(" "),
                    };
                });

                dispatch(fetchEmployees(results));
            });
    };
};
