import { SET_TOURNAMENT, SET_TOURNAMENTS, SET_IS_LOADING, SET_ERROR } from "./types"

export const setTournament = (data) => {
    return {
        type: SET_TOURNAMENT,
        payload: data
    }
}

export const setTournaments = (data) => {
    return {
        type: SET_TOURNAMENTS,
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
