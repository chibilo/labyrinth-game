import "./Directions.css";
import { Dir } from "../consts";
import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGameReady } from "../store/actions";
import ArrowLeft from "../assets/arrows-left.svg";
import ArrowRight from "../assets/arrows-right.svg";
import ArrowTop from "../assets/arrows-top.svg";
import ArrowBottom from "../assets/arrows-bottom.svg";

const ArrowDirs = {
	[Dir.Left]: ArrowLeft,
	[Dir.Right]: ArrowRight,
	[Dir.Up]: ArrowTop,
	[Dir.Down]: ArrowBottom,
}

const DirSquare = memo(function Square({ dir }) {
	return <div className="directions__square">
		{dir && <img alt={dir} src={ArrowDirs[dir]} />}
	</div>;
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
				<DirSquare key={i} dir={i < index ? v : ""} />
			))}
		</div>
	);
}
export default memo(Directions);
