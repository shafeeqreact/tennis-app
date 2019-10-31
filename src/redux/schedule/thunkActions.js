import { setTournament, setTournaments, setIsLoading, setError } from './actions';
import { tournament, tournaments } from './initialState';

export const getTournament = () => dispatch => {
    dispatch(setIsLoading());
    setTimeout(() =>
        dispatch(setTournament(tournament))
        // dispatch(setError("error"))
        , 2000)
}

export const getTournaments = () => dispatch => {
    dispatch(setIsLoading());
    setTimeout(() =>
        dispatch(setTournaments(tournaments))
        // dispatch(setError("error"))
        , 5000)
}
