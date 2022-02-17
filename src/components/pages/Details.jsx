import React, { Component } from "react";
// import {} from 'react-router-dom'

class Details extends Component {
	render() {
		return (
			<>
				<h1>Resource's details</h1>
				<pre>{JSON.stringify(this.props, null, 2)}</pre>
			</>
		);
	}
}

export default Details;
