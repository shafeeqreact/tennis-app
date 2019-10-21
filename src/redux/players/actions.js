import axios from 'axios';
import { GET_PLAYER, GET_PLAYERS, GET_ALL_PLAYERS } from './types';
import { fetchRequest, fetchRequestSuccess, fetchRequestFailure } from '../thunk/actions';

export const getPlayer = (id) => {
    return {
        type: GET_PLAYER,
        payload: id
    }
}

export const getPlayers = () => {
    return {
        type: GET_PLAYERS
    }
}

export const getAllPlayers = () => {
    return {
        type: GET_ALL_PLAYERS
    }
}

export const fetchPlayers = () => {
    return (dispatch) => {
        dispatch(fetchRequest());
        axios.get('https://reqres.in/api/users')
            .then(response => {
                dispatch(fetchRequestSuccess(response.data.data))
            })
            .catch(error => {
                dispatch(fetchRequestFailure(error.message))
            })
    }
}

export const fetchAllPlayers = () => {
    return (dispatch) => {
        dispatch(fetchRequest());
        axios.get('https://reqres.in/api/users')
            .then(response => {
                for (let i = 1; i <= response.data.total_pages; i++) {
                    axios.get(`https://reqres.in/api/users?page=${i}`)
                        .then(response => dispatch(fetchRequestSuccess(response.data.data)))
                        .catch(error => dispatch(fetchRequestFailure(error.message)))
                }
            })
            .catch(error => {
                dispatch(fetchRequestFailure(error.message))
            })
    }
}