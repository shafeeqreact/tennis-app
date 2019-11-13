import { SET_PLAYER, SET_PLAYERS, SET_ALL_PLAYERS, SET_IS_LOADING, SET_ERROR } from "./types";

const initialState = {
    player: {},
    players: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLAYER:
            return {
                ...state,
                player: action.payload,
                players: [],
                isLoading: false,
                error: ''
            }
        case SET_PLAYERS:
            return {
                ...state,
                player: {},
                players: action.payload,
                isLoading: false,
                error: ''
            }
        case SET_ALL_PLAYERS:
            return {
                ...state,
                player: {},
                players: [...state.players, ...action.payload],
                isLoading: false,
                error: ''
            }
        case SET_IS_LOADING:
            return {
                ...state,
                player: {},
                players: [],
                isLoading: true,
                error: ''
            }
        case SET_ERROR:
            return {
                ...state,
                player: {},
                players: [],
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
