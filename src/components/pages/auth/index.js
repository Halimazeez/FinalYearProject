import React from "react";
import { Link, Route, Switch, Router, Redirect } from "react-router-dom";
import Paper from "material-ui/Paper";
import SideNav from "./SideNav";

export default class Index extends React.Component {
	componentWillMount() {}
	render() {
		return (
			<div style={styles.root}>
				<SideNav />

				<div style={styles.container} className="app">
					<Paper style={styles.paper}>DashBoard</Paper>
				</div>
			</div>
		);
	}
}

const styles = {
	root: {
		margin: "auto",
		margin: "0 auto",
		left: 50,
		display: "flex"
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
