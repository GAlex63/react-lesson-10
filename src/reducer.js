export const initialState = {
	field: Array(9).fill(null),
	currentPlayer: 'x',
	isGameEnded: false,
	isDraw: false,
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_FIELD':
			return { ...state, field: action.payload };
		case 'SET_CURRENT_PLAYER':
			return { ...state, currentPlayer: action.payload };
		case 'SET_IS_GAME_ENDED':
			return { ...state, isGameEnded: action.payload };
		case 'SET_IS_DRAW':
			return { ...state, isDraw: action.payload };
		case 'RESTART_GAME':
			return initialState;
		default:
			return state;
	}
};
