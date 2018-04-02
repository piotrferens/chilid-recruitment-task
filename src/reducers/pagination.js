import { SET_PAGE, SET_FILTER, SET_SEARCH } from "../actions/actions";

const initialState = {
    isSearch: false,
    isFilter: false,
    page: 0,
    itemsPerPage: 5,
};

export const pagination = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGE:
            return {
                ...state,
                page: action.payload,
            };
        case SET_FILTER:
            const isFilter = !!action.payload;
            return {
                ...state,
                isFilter,
                page: isFilter && state.isSearch ? 0 : state.page,
            };
        case SET_SEARCH:
            const isSearch = !!action.payload;
            return {
                ...state,
                isSearch,
                page: state.isFilter && isSearch ? 0 : state.page,
            };
        default:
            return state;
    }
};
