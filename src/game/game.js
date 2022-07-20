import { getRandomCell, getRandomNumber } from "./utils";
import { GameStatus } from "../store/reducer";
import { Dir } from "../consts";

function genRandomDirection(curPos, cellCount) {
	let dirArray = Object.values(Dir).filter((dir) => {
		return (
			!(curPos[0] === 0 && dir === Dir.Up) &&
			!(curPos[0] === cellCount - 1 && dir === Dir.Down) &&
			!(curPos[1] === 0 && dir === Dir.Left) &&
			!(curPos[1] === cellCount - 1 && dir === Dir.Right)
		);
	});
	const idx = getRandomNumber(dirArray.length);
	return dirArray[idx];
}

function updateMarkerPosition(pos, dir) {
	switch (dir) {
		case Dir.Left:
			pos[1] = pos[1] - 1;
			break;
		case Dir.Right:
			pos[1] = pos[1] + 1;
			break;
		case Dir.Up:
			pos[0] = pos[0] - 1;
			break;
		case Dir.Down:
			pos[0] = pos[0] + 1;
			break;
		default: {
			console.error(`Unknown direction: ${dir}`);
			break;
		}
	}
	return pos;
}

export function generateNewGame(boardSize, stepCount) {
	const marker = getRandomCell(boardSize);
	let endPos = [...marker];
	const directions = Array.from({ length: stepCount }).map(() => {
		const dir = genRandomDirection(endPos, boardSize);
		endPos = updateMarkerPosition(endPos, dir);
		return dir;
	});
	return {
		startMarker: marker[0] * boardSize + marker[1],
		endMarker: endPos[0] * boardSize + endPos[1],
		userMarker: -1,
		directions,
		status: GameStatus.Started,
	};
}
