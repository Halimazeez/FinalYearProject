import { Route, IndexRoute } from "react-router=dom";

import DashBoard from "./components/pages/auth/";
import OneRepMaxCalc from "./components/pages/auth/OneRep";
import WorkOutCalc from "./components/pages/auth/WorkOutCalc";

import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";

export default (
	<Route>
		<Route path="/" exact component={HomePage} />
		<Route path="login" component={LoginPage} />
		<Route path="/register" exact component={RegisterPage} />
		<Route path="/dashboard" exact component={DashBoard} />
		<Route path="/onerepmaxcalc" component={OneRepMaxCalc} />
		<Route path="/workoutcalc" component={WorkOutCalc} />
	</Route>
);
