import { Route, Switch } from "react-router-dom";
// pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import List from "./components/pages/List";
import RandomDetails from "./components/pages/RandomDetails";
import Details from "./components/pages/Details";
import HeaderMain from "./components/layout/HeaderMain";
import Form from "./components/pages/Form";

import "./styles/App.css";

function App() {
	return (
		<div className="App">
			<HeaderMain />
			<main className="content-main">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/list" component={List} />
					<Route exact path="/details/random" component={RandomDetails} />
					<Route
						path="/details/:id"
						render={(props) => {
							return <Details {...props} />;
						}}
					/>
					<Route path="/create" component={Form} />
				</Switch>
			</main>
			<footer className="footer-main">&copy; ironhack-2022+</footer>
		</div>
	);
}

export default App;
