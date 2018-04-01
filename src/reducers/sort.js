import { SET_SORT } from "../actions/actions";

const initialState = {
    order: 1,
    by: "id",
};

export const sort = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT:
            return {
                ...state,
                by: action.payload,
                order: action.payload === state.by ? state.order * -1 : 1,
            };
        default:
            return state;
    }
};
