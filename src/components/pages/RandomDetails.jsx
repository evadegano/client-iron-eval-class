import React, { Component } from "react";
// import axios from 'axios';
// import apiHandler from "./../../api/handler";

class RandomDetails extends Component {
	state = {
		element: null,
	};
	componentDidMount() {}
	render() {
		return (
			<>
				<h1>Resource's details</h1>
				<p>
					Here you should display some informations about the element you
					fetched
				</p>
			</>
		);
	}
}

export default RandomDetails;
