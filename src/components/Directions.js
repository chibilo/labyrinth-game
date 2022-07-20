import "./Directions.css";
import { Dir } from "../consts";
import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGameReady } from "../store/actions";

const DirSquare = memo(function Square({ children }) {
	return <div className="directions__square">{children}</div>;
});

function Directions() {
	const [index, setIndex] = useState(-1);
	const directions = useSelector((state) => state.directions);
	const dispatch = useDispatch();
	const stepCount = directions.length;

	useEffect(() => {
		setIndex(0);
	}, [directions]);

	useEffect(() => {
		if (index >= stepCount) {
			dispatch(setGameReady());
			return;
		}

		const tm = setTimeout(() => {
			setIndex((idx) => idx + 1);
		}, 1000);
		return () => {
			clearTimeout(tm);
		};
	}, [index]);

	return (
		<div className="directions">
			{directions.map((v, i) => (
				<DirSquare key={i}>{i < index ? Object.keys(Dir)[v] : ""}</DirSquare>
			))}
		</div>
	);
}
export default memo(Directions);
