import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "./components/header/header";
import "typeface-roboto";

const App = () => (
	<MuiThemeProvider>
		<div>
			<Header />
			<Route path="/" exact component={HomePage} />
			<Route path="/login" exact component={LoginPage} />
		</div>
	</MuiThemeProvider>
);

export default App;
