import { SET_SCHEDULE, SET_IS_LOADING, SET_ERROR } from "./types";

const initialState = {
    schedule: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SCHEDULE:
            return {
                ...state,
                schedule: [...state.schedule, ...action.payload],
                isLoading: false,
                error: ''
            }
        case SET_IS_LOADING:
            return {
                ...state,
                schedule: [],
                isLoading: true,
                error: ''
            }
        case SET_ERROR:
            return {
                ...state,
                schedule: [],
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
