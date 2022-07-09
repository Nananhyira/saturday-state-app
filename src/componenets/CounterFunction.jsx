import React, { useState } from "react";

function CounterFunction() {
	const [number, setNumber] = useState(0);

	const Increment = () => {
		setNumber(number + 1);
	};
	const Decrement = () => {
		setNumber(number - 1);
	};

	return (
		<div style={{ display: "flex", flexDirection: "column", flex: 3 }}>
			<h1>COUNT {number} </h1>
			<button onClick={Increment}>+</button>
			<button onClick={Decrement}>-</button>
		</div>
	);
}
export default CounterFunction;
