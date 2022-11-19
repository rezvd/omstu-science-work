import {createStore, combineReducers, applyMiddleware, Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';

import curriculum, {CurriculumActions} from './reducers/curriculum';

const rootReducer = combineReducers({
  curriculum,
});

const middlewares = [thunk];

const enchancedMiddleware = applyMiddleware(...middlewares);
export const store = createStore(rootReducer, enchancedMiddleware);

export type State = ReturnType<typeof rootReducer>;
export type Store = typeof store;

export type AppActions = CurriculumActions;

export type AppDispatch<A extends Action> = ThunkDispatch<State, unknown, A>;
