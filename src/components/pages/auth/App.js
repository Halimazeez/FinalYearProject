import React from "react";
import Paper from "material-ui/Paper";
import SideNav from "./SideNav";
import PropTypes from "prop-types";
import Header from "../../header/header"

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sideNavOpen: true
    };
  }

	handleChangeRequestSideNav() {
	    this.setState({
	      sideNavOpen: !this.state.sideNavOpen
	    });
	  }

  render() {
		let { navDrawerOpen } = this.state;
    return (
      <div style={styles.root}>

				{/* pass header prop function*/}
				<Header handleChangeRequestSideNav={this.handleChangeRequestSideNav.bind(this)}/>

				{/* get value of sideNavOpen*/}
        <SideNav sideNavOpen={this.state.sideNavOpen} />

        <div style={styles.container} className="app">
          <Paper style={styles.paper}>
              <h1>DashBoard</h1>
          </Paper>
        </div>
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.element
};
const styles = {
  root: {
    margin: "auto",
    margin: "0 auto",
    left: 50,

  },
  container: {
    width: "100%",
    textAlign: "center"
  },
  paper: {
    height: "calc(100vh - 64px)",
    overflow: "auto"
  }
};
