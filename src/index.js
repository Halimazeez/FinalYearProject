import React from "react";
import ReactDOM from "react-dom";

import { Router, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";

import App from "./components/pages/auth/App";
import DashBoard from "./components/pages/auth/DashBoard";
import OneRepCalc from "./components/pages/auth/OneRepCalc";
import WorkOutCalc from "./components/pages/auth/WorkOutCalc";
import SideNav from "./components/pages/auth/SideNav";
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
    history.push("/dashboard");
  } else {
    //otherwise goto login page
    history.replace("/login");
  }
});

//render into the DOM
ReactDOM.render(
  <Router history={history}>
    <MuiThemeProvider theme={theme}>
      <Route path="/login" exact component={LoginPage} />
      <Route path="/register" exact component={RegisterPage} />
      <Route path="/dashboard" component={App} />
      <Route path="dashy" component={DashBoard} />
      <Route path="onerepmaxcalc" component={OneRepCalc} />
      <Route path="workoutcalc" component={WorkOutCalc} />
    </MuiThemeProvider>
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();
