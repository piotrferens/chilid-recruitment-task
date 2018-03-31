import { SET_SORT } from "../actions/actions";

export const sort = (state = "id", action) => {
    switch (action.type) {
        case SET_SORT:
            return action.payload;
        default:
            return state;
    }
};
