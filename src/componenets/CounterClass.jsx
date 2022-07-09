import React, { Component } from "react";

class CounterClass extends Component {
	constructor(props) {
		super();
		this.state = { number: 0 };
		// this.Increment = this.Increment.bind(this);
	}
	Increment = () => {
		this.setState({ number: this.state.number + 1 });
	};

	render() {
		return (
			<div>
				<h1>COUNT {this.state.number}</h1>
				<button onClick={this.Increment}>increase</button>
				<button
					onClick={() => {
						this.setState({ number: this.state.number - 1 });
					}}>
					decrease
				</button>
			</div>
		);
	}
}
export default CounterClass;
