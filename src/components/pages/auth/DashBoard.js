import React from "react";
import { Link } from "react-router-dom";
import Paper from "material-ui/Paper";
import SideNav from "./SideNav";

export default class Dashboard extends React.Component {
	render() {
		return (
			<div style={styles.root}>
				<SideNav />

				<div style={styles.container}>
					<Paper style={styles.paper}>
						Dashboard access granted. Page: TODO
					</Paper>
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
		margin: "auto",
		textAlign: "center"
	},
	paper: {
		height: "100vh",
		overflow: "auto"
	}
};
