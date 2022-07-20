function getRandomNumber(max) {
	return Math.floor(Math.random() * max);
}

function getRandomCell(cellCount) {
	return [getRandomNumber(cellCount), getRandomNumber(cellCount)];
}

export { getRandomNumber, getRandomCell };
