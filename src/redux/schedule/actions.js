import { SET_SCHEDULE, SET_IS_LOADING, SET_ERROR } from "./types"

export const setSchedule = (data) => {
    return {
        type: SET_SCHEDULE,
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
