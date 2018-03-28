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
import { withStyles } from "material-ui/styles";
import { Home } from "material-ui-icons/";

class App extends React.Component {
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
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {/* pass Header component the state to toggle*/}
        <Header toggleSideNav={this.toggleSideNav.bind(this)} />

        {/* get value of sideNavOpen*/}
        <SideNav sideNavOpen={this.state.sideNavOpen} />
        <main className={classes.container}>{this.props.children}</main>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};
const styles = {
  root: {
    display: "flex"
  },
  container: {
    paddingTop: 80,
  }
};

export default withStyles(styles)(App);
