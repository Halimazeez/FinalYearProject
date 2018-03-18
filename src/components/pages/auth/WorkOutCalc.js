import React from "react";
import { Link } from "react-router-dom";
import Paper from "material-ui/Paper";

export default class WorkOutCalc extends React.Component {
	render() {
		return <div style={styles.root}>Workout Calculator</div>;
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
		height: "calc(100vh - 64px)",
		overflow: "auto"
	}
};
