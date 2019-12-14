import { SET_PLAYER, SET_TOP_6_PLAYERS, SET_ALL_PLAYERS, SET_IS_LOADING, SET_ERROR } from "./types";

const initialState = {
    headerImages: [],
    player: {},
    players: [],
    isLoading: true,
    error: ''
}

// temporary code
const images = [
    { _id: 1, link: 'assets/img/slider/rfederer.jpg' },
    { _id: 2, link: 'assets/img/slider/swilliams.jpg' },
    { _id: 3, link: 'assets/img/slider/rnadal.jpg' },
    { _id: 4, link: 'assets/img/slider/msharapova.jpg' },
    { _id: 5, link: 'assets/img/slider/ndjokovic.jpg' },
    { _id: 6, link: 'assets/img/slider/shalep.jpg' },
]

// temporary code
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
                headerImages: [],
                // player: action.payload,
                player: player,
                players: [],
                isLoading: false,
                error: ''
            }
        case SET_TOP_6_PLAYERS:
            const top6Players = action.payload.map(player => {
                return {
                    ...player,
                    social_networks
                }
            })
            return {
                ...state,
                // headerImages:action.payload.images,
                headerImages: images,
                player: {},
                // players: action.payload,
                players: top6Players,
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
                headerImages: [],
                player: {},
                // players: [...state.players, ...action.payload],
                players: [...state.players, ...allPlayers],
                isLoading: false,
                error: ''
            }
        case SET_IS_LOADING:
            return {
                ...state,
                headerImages: [],
                player: {},
                players: [],
                isLoading: true,
                error: ''
            }
        case SET_ERROR:
            return {
                ...state,
                headerImages: [],
                player: {},
                players: [],
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
