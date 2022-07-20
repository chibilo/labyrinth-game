import React, { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setUserMarker } from "../store/actions";

function BoardSquare({ id, className, children }) {
	const dispatch = useDispatch();
	const userSelect = useCallback(() => {
		dispatch(setUserMarker(id));
	}, [id]);
	return (
		<div onClick={userSelect} className={`board__square ${className}`}>
			{children}
		</div>
	);
};

export default memo(BoardSquare);
