import { FETCH_REQUEST, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_FAILURE } from './types';

export const fetchRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}

export const fetchRequestSuccess = (data) => {
    return {
        type: FETCH_REQUEST_SUCCESS,
        payload: data
    }
}

export const fetchRequestFailure = (error) => {
    return {
        type: FETCH_REQUEST_FAILURE,
        payload: error
    }
}