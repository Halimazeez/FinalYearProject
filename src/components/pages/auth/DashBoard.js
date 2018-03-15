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
		flexGrow: 1
	},
	container: {
		maxWidth: "50%",
		paddingTop: 10,
		margin: "auto",
		textAlign: "center"
	},
	paper: {
		padding: "20%",
		overflow: "auto"
	}
};
