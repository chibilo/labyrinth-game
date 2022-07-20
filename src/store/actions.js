export const Actions = {
	START_NEW_GAME: "START_NEW_GAME",
	SET_GAME_READY: "SET_GAME_READY",
	SET_USER_MARKER: "SET_USER_MARKER",
};

export const startNewGame = (boardSize, stepCount) => ({
	type: Actions.START_NEW_GAME,
	payload: { boardSize, stepCount },
});
export const setGameReady = () => ({ type: Actions.SET_GAME_READY });
export const setUserMarker = (userMarker) => ({
	type: Actions.SET_USER_MARKER,
	payload: { userMarker },
});
