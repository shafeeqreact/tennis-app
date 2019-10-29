import { setSchedule, setIsLoading, setError } from './actions';
import { schedule } from './initialState';

export const getSchedule = () => dispatch => {
    dispatch(setIsLoading());
    setTimeout(() =>
        dispatch(setSchedule(schedule))
        // dispatch(setError("error"))
        , 5000)
}

