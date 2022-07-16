import React, { useState } from "react";

function WeekFuncState() {
	const [counter, setCounter] = useState(0);

	const handleClick = () => {
		setCounter(counter + 1);
	};
	return (
		<div>
			<h1>Count {counter} </h1>
			<button onClick={handleClick}>Increment</button>
			<button
				onClick={() => {
					setCounter(counter - 1);
				}}>
				dcrement
			</button>
		</div>
	);
}

export default WeekFuncState;
