import SideNav from "./auth/SideNav";
import React from "react";
import { Header } from "../header/header";
import PropTypes from "prop-types";

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			navDrawerOpen: false
		};
	}
	render() {
		return (
			<div style={styles.root}>
				<Header />

				<SideNav />

				<div style={styles.container}>{this.props.children}</div>
			</div>
		);
	}
}

Main.propTypes = {
	children: PropTypes.element
};
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
	}
};
