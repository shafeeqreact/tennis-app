import { SET_PLAYER, SET_PLAYERS, SET_ALL_PLAYERS, SET_IS_LOADING, SET_ERROR } from "./types";

const initialState = {
    player: {},
    players: [],
    isLoading: true,
    error: ''
}

const social_networks = [
    { _id: 1, type: 'facebook', link: 'https://www.facebook.com' },
    { _id: 2, type: 'twitter', link: 'https://www.twitter.com' },
    { _id: 3, type: 'linkedin', link: 'https://www.linkedin.com' },
    { _id: 4, type: 'behance', link: 'https://www.behance.com' }
]

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLAYER:
            const player = {
                social_networks,
                ...action.payload
            }
            return {
                ...state,
                // player: action.payload,
                player: player,
                players: [],
                isLoading: false,
                error: ''
            }
        case SET_PLAYERS:
            const players = action.payload.map(player => {
                return {
                    ...player,
                    social_networks
                }
            })
            return {
                ...state,
                player: {},
                // players: action.payload,
                players: players,
                isLoading: false,
                error: ''
            }
        case SET_ALL_PLAYERS:
            const allPlayers = action.payload.map(player => {
                return {
                    ...player,
                    social_networks
                }
            })
            return {
                ...state,
                player: {},
                // players: [...state.players, ...action.payload],
                players: [...state.players, ...allPlayers],
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
