import React, { Component } from "react";

class ClassState extends Component {
	constructor(props) {
		super();
		this.state = { name: "student" };
	}
	handleClick = () => {
		this.setState({ name: "you are welcome" });
	};
	render() {
		return (
			<div>
				<h1 onClick={this.handleClick}>hello codetrain {this.state.name} </h1>
			</div>
		);
	}
}

export default ClassState;
