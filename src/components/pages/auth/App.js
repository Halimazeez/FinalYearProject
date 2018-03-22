import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Paper from "material-ui/Paper";
import SideNav from "./SideNav";
import PropTypes from "prop-types";
import Header from "../../header/header";
import DashBoard from "./DashBoard";
import OneRepCalc from "./OneRepCalc";
import WorkOutCalc from "./WorkOutCalc";
import history from "../../helpers/history";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNavOpen: true
    };
  }

  toggleSideNav() {
    this.setState({
      sideNavOpen: !this.state.sideNavOpen
    });
  }

  render() {
    const styles = {
      root: {
        display: "flex"
      },
      container: {
        width: "100%",
        paddingLeft: this.state.sideNavOpen ? 60 : 0,
        paddingTop: "64px",
        textAlign: "center",
        margin: "auto"
      },
      paper: {
        //  height: "calc(100vh - 64px)",
        overflow: "auto",
        textAlign: "center"
      }
    };

    return (
      <div style={styles.root}>
        {/* pass Header component the state to toggle*/}
        <Header toggleSideNav={this.toggleSideNav.bind(this)} />

        {/* get value of sideNavOpen*/}
        <SideNav sideNavOpen={this.state.sideNavOpen} />

        <main style={styles.container} className="app">
          <Paper style={styles.paper}>
            <div>dasd</div>
          </Paper>
        </main>
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.element
};
