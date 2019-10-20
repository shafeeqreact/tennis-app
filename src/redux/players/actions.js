import { GET_PLAYER, GET_PLAYERS, GET_ALL_PLAYERS } from './types';

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