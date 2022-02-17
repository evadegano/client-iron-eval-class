import React, { Component } from "react";
// import axios from 'axios';
// import service from './../../api/service';

class List extends Component {
	state = {
		list: [],
	};

	componentDidMount() {}

	render() {
		return (
			<>
				<h1>Let's list, shall we ?</h1>
				<p>This component should display resources you must fetch.</p>
			</>
		);
	}
}

export default List;
