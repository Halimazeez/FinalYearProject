import React from "react";
import { Link } from "react-router-dom";
import Paper from "material-ui/Paper";

export default class OneRepCalc extends React.Component {
	render() {
		return <div style={styles.root}>OneRep Calculator</div>;
	}
}

const styles = {
	root: {
		margin: "auto",
		margin: "0 auto",
		left: 50,
		display: "flex"
	}
};
