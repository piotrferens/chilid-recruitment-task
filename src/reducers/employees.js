import { FETCH_EMPLOYEES } from "../actions/actions";

export const employees = (state = [], action) => {
    switch (action.type) {
        case FETCH_EMPLOYEES:
            return action.payload.employees;
        default:
            return state;
    }
};
