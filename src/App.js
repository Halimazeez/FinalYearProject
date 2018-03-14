import React from "react";
import { Route, redirect } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import DashBoard from "./components/pages/auth/DashBoard";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "./components/header/header";
import "typeface-roboto";
import theme from "./layout/theme";

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<div>
					<Header />
					<Route path="/" exact component={HomePage} />
					<Route path="/login" exact component={LoginPage} />
					<Route path="/register" exact component={RegisterPage} />
					<Route path="/dashboard" exact component={DashBoard} />
				</div>
			</MuiThemeProvider>
		);
	}
}
export default App;
