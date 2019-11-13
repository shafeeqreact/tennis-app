import http from '../../services/httpService';
import { setPlayer, setPlayers, setAllPlayers, setIsLoading, setError } from './actions';

const endPoint = `${process.env.REACT_APP_URL}/users`;

export const getPlayer = (id) => dispatch => {
    dispatch(setIsLoading());
    http.get(`${endPoint}/${id}`)
        .then(response => dispatch(setPlayer(response.data.data)))
        .catch(error => dispatch(setError(error.message)))
}

export const getPlayers = () => dispatch => {
    dispatch(setIsLoading());
    http.get(endPoint)
        .then(response => dispatch(setPlayers(response.data.data)))
        .catch(error => dispatch(setError(error.message)))
}

export const getAllPlayers = () => dispatch => {
    dispatch(setIsLoading());
    http.get(endPoint)
        .then(response => {
            const totalPages = response.data.total_pages;
            for (let i = 1; i <= totalPages; i++) {
                http.get(`${endPoint}?page=${i}`)
                    .then(response => dispatch(setAllPlayers(response.data.data)))
                    .catch(error => dispatch(setError(error.message)))
            }
        })
        .catch(error => {
            dispatch(setError(error.message));
        })
}
