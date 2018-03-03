import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "./components/header/header";
import "typeface-roboto";
import theme from "./layout/theme";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			authenticated: false
		};
	}
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<div>
					<Header authenticated={this.state.authenticated} />
					<Route path="/" exact component={HomePage} />
					<Route path="/login" exact component={LoginPage} />
				</div>
			</MuiThemeProvider>
		);
	}
}
export default App;
