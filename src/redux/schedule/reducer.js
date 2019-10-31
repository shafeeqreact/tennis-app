import { SET_TOURNAMENT, SET_TOURNAMENTS, SET_IS_LOADING, SET_ERROR } from "./types";

const initialState = {
    tournament: {},
    tournaments: [],
    isLoading: true,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOURNAMENT:
            return {
                ...state,
                tournament: action.payload,
                tournaments: [],
                isLoading: false,
                error: ''
            }
        case SET_TOURNAMENTS:
            return {
                ...state,
                tournament: {},
                tournaments: [...action.payload],
                isLoading: false,
                error: ''
            }
        case SET_IS_LOADING:
            return {
                ...state,
                tournament: {},
                tournaments: [],
                isLoading: true,
                error: ''
            }
        case SET_ERROR:
            return {
                ...state,
                tournament: {},
                tournaments: [],
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
