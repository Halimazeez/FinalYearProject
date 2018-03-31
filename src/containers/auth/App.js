import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

import SideNav from "./SideNav";

import Header from "../../components/header/Header";
import history from "../../components/helpers/history";

import Paper from "material-ui/Paper";
import { withStyles } from "material-ui/styles";
import { Home } from "material-ui-icons/";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {/* get value of sideNavOpen*/}
        <SideNav sideNavOpen={this.props.sideNavOpen} />
        <main className={classes.container} />
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
    paddingTop: 80
  }
};

export default withStyles(styles)(App);
