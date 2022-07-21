import "./Board.css";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import { GameStatus } from "../store/reducer";
import BoardSquare from "./BoardSquare";


function Board({ size }) {
	const startMarker = useSelector((state) => state.startMarker);
	const endMarker = useSelector((state) => state.endMarker);
	const userMarker = useSelector((state) => state.userMarker);
	const status = useSelector((state) => state.status);

	const isCorrect = status === GameStatus.Ended && endMarker === userMarker;

	return (
		<div className="board" style={{ gridTemplateColumns: `repeat(${size}, 100px)` }}>
			{Array.from({ length: size * size }).map((v, i) => {
				const userSelected = userMarker !== -1 && userMarker === i;
				const startMarkerText = startMarker === i ? "Start" : "";
				const endMarkerText = status === GameStatus.Ended && (endMarker === i && !isCorrect) ? "End" : "";
				const userSelectedStyle = userSelected ? (isCorrect ? "correct" : "selected") : "";
				return (
					<BoardSquare id={i} key={i} className={userSelectedStyle}>
						{startMarkerText || endMarkerText || ""}
					</BoardSquare>
				);
			})}
		</div>
	);
}

export default memo(Board);
