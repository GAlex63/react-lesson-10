export const setField = (field) => ({
	type: 'SET_FIELD',
	payload: field,
});

export const setCurrentPlayer = (player) => ({
	type: 'SET_CURRENT_PLAYER',
	payload: player,
});

export const setIsGameEnded = (isGameEnded) => ({
	type: 'SET_IS_GAME_ENDED',
	payload: isGameEnded,
});

export const setIsDraw = (isDraw) => ({
	type: 'SET_IS_DRAW',
	payload: isDraw,
});

export const restartGame = () => ({
	type: 'RESTART_GAME',
});
