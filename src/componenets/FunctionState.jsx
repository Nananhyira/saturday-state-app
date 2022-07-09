import React, { useState } from "react";

function FunctionState() {
	const [name, setName] = useState("kwame");

	return (
		<div>
			<h1
				onClick={() => {
					setName("ama");
				}}>
				hello FunctionState codetrain {name}
			</h1>
		</div>
	);
}

export default FunctionState;
