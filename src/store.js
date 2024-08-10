import { createStore as reduxCreateStore } from 'redux';
import { appReducer, initialState } from './reducer';

const createStore = (reducer, initialState) => {
	let state = initialState;
	let listeners = [];

	return {
		dispatch: (action) => {
			state = reducer(state, action);
			listeners.forEach((listener) => listener());
		},
		getState: () => state,
		subscribe: (listener) => {
			listeners.push(listener);
			return () => {
				listeners = listeners.filter((l) => 1 !== listener);
			};
		},
	};
};

export const store = createStore(appReducer, initialState);
