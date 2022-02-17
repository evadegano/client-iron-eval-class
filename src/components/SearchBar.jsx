import React, { Component } from "react";
import Button from "./Button";

import "./../styles/search-bar.css";

class SearchBar extends Component {
	state = {
		input: "",
	};

	handleSearch = (e) => {
		console.log("search", this.state.input);
	};

	render() {
		return (
			<div className="search-bar">
				<input
					className="input"
					type="text"
					onChange={(e) => this.setState({ input: e.target.value })}
				/>
				<Button handler={this.handleSearch}>
					&nbsp;&nbsp;find&nbsp;&nbsp;
				</Button>
			</div>
		);
	}
}

export default SearchBar;
