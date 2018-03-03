import React from "react";
import Button from "material-ui/Button";
import MenuItem from "material-ui/Menu/MenuItem";
import TextField from "material-ui/TextField";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Formsy from "formsy-react";
import styled from "styled-components";

class LoginForm extends React.Component {
	constructor() {
		super();
		this.state = {
			data: {
				username: "",
				password: ""
			},
			loading: false, // load in state
			errors: {} // error object empty by default
		};
	}

	//global onchange for state
	onchange = e =>
		this.setState({
			data: { ...this.state.data, [e.target.name]: e.target.value }
		});

	// submit login form with username and password
	onSubmit = event => {
		//this.props.submit(this.state.data);
		this.authWithEmailPassword(event);
	};

	//refernce for form to reset after authenticated
	refForm = form => {
		this.LoginForm = form;
	};

	render() {
		const { classes } = this.props;
		const data = this.state;
		return (
			<form
				className={classes.container}
				onSubmit={this.onSubmit}
				ref={this.refForm}
			>
				<Paper className={classes.paper}>
					<h1 className={classes.header}>Login</h1>
					<TextField
						id="username"
						label="Username"
						className={classes.textField}
						value={data.username}
						onChange={this.onChange}
						required
					/>
					<TextField
						id="password"
						label="Password"
						className={classes.textField}
						value={data.password}
						type="password"
						onChange={this.onChange}
						required
					/>
					<Button
						type="submit"
						className={classes.button}
						variant="raised"
						color="primary"
					>
						Login
					</Button>
					<Button
						className={classes.buttonFb}
						variant="raised"
						color="primary"
						onClick={() => {
							this.authwithFacebook();
						}}
					>
						Login with facebook
					</Button>
				</Paper>
			</form>
		);
	}
}

LoginForm.propTypes = {
	classes: PropTypes.object.isRequired,
	submit: PropTypes.func.isRequired
};

const styles = theme => ({
	textField: {
		width: 300,
		marginTop: 0,
		marginBottom: 10
	},

	container: {
		display: "flex",
		flexWrap: "wrap",
		minWidth: 320,
		maxWidth: 400,
		height: "auto",
		position: "absolute",
		top: "30%",
		left: 0,
		right: 0,
		margin: "auto",
		textAlign: "center"
	},
	paper: {
		padding: 20,
		overflow: "auto"
	},
	button: {
		width: 300,
		marginBottom: 10
	},
	header: {
		textAlign: "center"
	}
});

export default withStyles(styles)(LoginForm);
