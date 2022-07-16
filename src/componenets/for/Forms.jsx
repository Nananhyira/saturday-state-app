import React, { useState } from "react";

function Forms() {
	const [name, setName] = useState("");
	const [gen, setGen] = useState("");
	const [data, setData] = useState([
		{ name: "Irene", gen: "45" },
		{ name: "Awal", gen: "4" },
		{ name: "zake", gen: "5" },
		{ name: "kofi", gen: "451" },
	]);

	const HandleClick = (e) => {
		e.preventDefault();
		setData([...data, { name, gen }], );
	};

	return (
		<>
			<form style={{ margin: "40px" }}>
				<h1>fill form here</h1>
				<label>Name</label>
				<input
					type="text"
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
				<br />
				<label>Gen</label>
				<input
					type="text"
					value={gen}
					onChange={(e) => {
						setGen(e.target.value);
					}}
				/>
				<br />
				<button onClick={HandleClick}>submit</button>
			</form>
			{data.map((item, index) => {
				return (
					<div key={index} style={{ margin: "40px" }}>
						<h1>{item.name}</h1>
						<h2>{item.gen}</h2>
					</div>
				);
			})}
		</>
	);
}

export default Forms;
