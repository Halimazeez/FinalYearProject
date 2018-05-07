import React from "react";
import { Router, Route } from "react-router-dom";

import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import NotFoundPage from "./containers/NotFoundPage";
import App from "./containers/auth/App";
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
      sideNavOpen: true,
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
              path="/dashboard"
              render={() => <App sideNavOpen={this.state.sideNavOpen} />}
            />
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/dashboard/profile" component={Profile} />
            <Route path="/dashboard/onerepcalc" component={OneRepCalc} />
            <Route path="/dashboard/workoutcalc" component={WorkOutCalc} />
            {/*<Route path="/" component={NotFoundPage} /> */}
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}
