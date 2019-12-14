import { SET_PLAYER, SET_TOP_6_PLAYERS, SET_ALL_PLAYERS, SET_IS_LOADING, SET_ERROR } from "./types"

export const setPlayer = (data) => {
    return {
        type: SET_PLAYER,
        payload: data
    }
}

export const setTop6Players = (data) => {
    return {
        type: SET_TOP_6_PLAYERS,
        payload: data
    }
}

export const setAllPlayers = (data) => {
    return {
        type: SET_ALL_PLAYERS,
        payload: data
    }
}

export const setIsLoading = () => {
    return {
        type: SET_IS_LOADING
    }
}

export const setError = (data) => {
    return {
        type: SET_ERROR,
        payload: data
    }
}
