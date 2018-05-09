import React from "react";
import { Router, Route } from "react-router-dom";

import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import NotFoundPage from "./containers/NotFoundPage";
import DashBoard from "./containers/auth/DashBoard";
import OneRepCalc from "./containers/auth/OneRepCalc";
import WorkOutCalc from "./containers/auth/WorkOutCalc";
import SideNav from "./containers/auth/SideNav";
import Profile from "./containers/auth/Profile";

import Header from "./components/header/Header";
import history from "./components/helpers/history";
import { firebaseAuth } from "./components/helpers/dbCon";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "typeface-roboto";
import theme from "./layout/theme";

export default class IndexApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNavOpen: false,
      isAuthed: null
    };
  }

  toggleSideNav() {
    this.setState({
      sideNavOpen: !this.state.sideNavOpen
    });
  }

  componentDidMount() {
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        //set global auth state to true if user is logged in
        this.setState({ isAuthed: true });
      } else {
        //otherwise goto home page and set auth state to false
        history.replace("/");
        this.setState({ isAuthed: false });
      }
    });
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router history={history}>
          <div>
            <Route
              path="/"
              render={() => (
                <Header
                  toggleSideNav={this.toggleSideNav.bind(this)}
                  isAuthed={this.state.isAuthed}
                />
              )}
            />
            <Route
              path="/"
              render={() => (
                <SideNav
                  sideNavOpen={this.state.sideNavOpen}
                  toggleSideNav={this.toggleSideNav.bind(this)}
                />
              )}
            />
            <Route exact path="/" component={HomePage} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/dashboard" component={OneRepCalc} />
            <Route path="/workoutcalc" component={WorkOutCalc} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}
