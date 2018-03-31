import { FETCH_EMPLOYEES, SET_PAGE } from "../actions/actions";

const initialState = {
    numberOfPages: 0,
    actualPage: 0,
    itemsPerPage: 5,
};

export const pagination = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EMPLOYEES:
            return {
                ...state,
                numberOfPages: Math.ceil(action.payload.length / 5),
            };
        case SET_PAGE:
            return {
                ...state,
                actualPage: action.payload,
            };
        default:
            return state;
    }
};
