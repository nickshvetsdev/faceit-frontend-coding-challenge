import { combineReducers } from 'redux';
import tournamentReducer from './tournamentReducer';

const reducers = combineReducers({
  tournaments: tournamentReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
