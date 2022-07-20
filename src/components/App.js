import "./App.css";
import { useEffect } from "react";
import Board from "./Board";
import Directions from "./Directions";
import { BOARD_SIZE, STEP_COUNT } from "../consts";
import { useDispatch, useSelector } from "react-redux";
import { GameStatus } from "../store/reducer";
import { startNewGame } from "../store/actions";

function App() {
	const status = useSelector((state) => state.status);
	const dispatch = useDispatch();

	function newGame() {
		dispatch(startNewGame(BOARD_SIZE, STEP_COUNT));
	}

	useEffect(() => {
		newGame();
	}, []);

	return (
		<div className="app">
			<Board size={BOARD_SIZE} />
			<Directions />
			<button disabled={status !== GameStatus.Ended} onClick={newGame}>
				Start over
			</button>
		</div>
	);
}

export default App;
