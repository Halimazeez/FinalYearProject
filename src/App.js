import React from "react";
import { Route, Redirect, Router, Switch } from "react-router-dom";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "typeface-roboto";
import theme from "./layout/theme";

import { Header } from "./components/header/header";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";

import DashBoard from "./components/pages/auth/";
import OneRepMaxCalc from "./components/pages/auth/OneRep";
import WorkOutCalc from "./components/pages/auth/WorkOutCalc";
import SideNav from "./components/pages/auth/SideNav";

import { firebaseAuth } from "./components/helpers/dbCon";

import history from "./components/helpers/history";

export default class App extends React.Component {
	//On app start, check to see if user is authenticated
	componentWillMount() {
		firebaseAuth().onAuthStateChanged(user => {
			if (user) {
				//goto dashboard if user is logged in
				history.push("/dashboard");
			} else {
				//otherwise goto login page
				history.replace("/login");
			}
		});
	}

	render() {
		return (
			<Router path="/" history={history}>
				<MuiThemeProvider theme={theme}>
					<Header />
					<Route path="/home" exact component={HomePage} />
					<Route path="/login" exact component={LoginPage} />
					<Route path="/register" exact component={RegisterPage} />
					<Route path="/dashboard" exact component={DashBoard} />

					<Route path="/onerepmaxcalc" component={OneRepMaxCalc} />
					<Route path="/workoutcalc" component={WorkOutCalc} />
				</MuiThemeProvider>
			</Router>
		);
	}
}
