import { combineReducers } from 'redux';
import { reducer as playersReducer } from './players/reducer';
import { reducer as scheduleReducer } from './schedule/reducer';

export const rootReducer = combineReducers({
    players: playersReducer,
    schedule: scheduleReducer
})
