import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, Switch, Redirect } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import NotFoundPage from "./components/pages/NotFoundPage";

import App from "./components/pages/auth/App";
import DashBoard from "./components/pages/auth/DashBoard";
import OneRepCalc from "./components/pages/auth/OneRepCalc";
import WorkOutCalc from "./components/pages/auth/WorkOutCalc";
import SideNav from "./components/pages/auth/SideNav";
import Profile from "./components/pages/auth/Profile"

import Header from "./components/header/header";

import history from "./components/helpers/history";

import { firebaseAuth } from "./components/helpers/dbCon";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "typeface-roboto";
import theme from "./layout/theme";

//On app start, check to see if user is authenticated
firebaseAuth().onAuthStateChanged(user => {
  if (user) {
    //goto dashboard if user is logged in
    history.replace("/dashboard")
  } else {
    //otherwise goto login page
    history.replace("/home");
  }
});

//render into the DOM
ReactDOM.render(
  <Router history={history}>
    <MuiThemeProvider theme={theme}>
      <Route path="/home" component={Header} />
      <Route path="/home/login" component={LoginPage} />
      <Route path="/home/register" component={RegisterPage} />
      <Route path="/dashboard" component={App} />
      <Route path="/dashboard/profile" component={Profile}/>
      <Route path="/dashboard/onerepcalc" component={OneRepCalc} />
      <Route path="/dashboard/workoutcalc" component={WorkOutCalc} />
      {/*<Route path="/" component={NotFoundPage} /> */}
    </MuiThemeProvider>
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();
