import { Actions } from "./actions";
import { generateNewGame } from "../game/game";

export const GameStatus = {
	NotInit: "NotInit",
	Started: "Started",
	Ready: "Ready",
	Ended: "Ended",
};

const InitialState = {
	directions: [],
	startMarker: -1,
	endMarker: -1,
	userMarker: -1,
	status: GameStatus.NotInit,
};

function reducer(state = InitialState, action) {
	switch (action.type) {
		case Actions.START_NEW_GAME:
			return generateNewGame(action.payload.boardSize, action.payload.stepCount);
		case Actions.SET_GAME_READY:
			return { ...state, status: GameStatus.Ready };
		case Actions.SET_USER_MARKER:
			if(state.status !== GameStatus.Ready) return state;
			return {
				...state,
				userMarker: action.payload.userMarker,
				status: GameStatus.Ended,
			};
		default:
			return state;
	}
}

export default reducer;
