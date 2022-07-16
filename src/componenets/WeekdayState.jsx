import React, { Component } from "react";

class WeekdayState extends Component {
	constructor(props) {
		super();
		this.state = { count: 0 };
		// this.handleClick=this.handleClick.bind(this);
	}
	handleClick = () => {
		this.setState({ count: this.state.count + 1 });
	};



	render() {
		return (
			<div>
				<h1>Let COUNT {this.state.count}</h1>
				<button onClick={this.handleClick}>increase</button>
				<button
					onClick={() => {
						this.setState({ count: this.state.count - 1 });
					}}>
					decrease
				</button>
        <hr />
			</div>
		);
	}
}
export default WeekdayState;
