import React from "react";
import Button from "material-ui/Button";
import MenuItem from "material-ui/Menu/MenuItem";
import TextField from "material-ui/TextField";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Paper from "material-ui/Paper";
import { login, resetPassword } from "../helpers/auth";

//Login error
function setErrorMsg(error) {
	return {
		loginMessage: error
	};
}

export default class LoginForm extends React.Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			loginMessage: null
		};
	}

	//global onchange for state
	onchange = e =>
		this.setState({
			[e.target.id]: e.target.value
		});

	// submit login form with username and password
	onSubmit = e => {
		this.setState(setErrorMsg(""));
		e.preventDefault();
		login(this.state.email, this.state.password).catch(error => {
			this.setState(setErrorMsg("Invalid Email or Password."));
		});
	};

	//refernce for form to reset after authenticated
	refForm = form => {
		this.LoginForm = form;
	};

	render() {
		const data = this.state;
		return (
			<form
				style={styles.container}
				onSubmit={this.onSubmit}
				ref={this.refForm}
			>
				<Paper style={styles.paper}>
					<h1 style={styles.header}>Login</h1>
					<TextField
						id="email"
						label="Email"
						placeholder="Enter your email"
						style={styles.textField}
						value={this.state.email}
						onChange={this.onChange}
						required
					/>
					<TextField
						id="password"
						label="Password"
						style={styles.textField}
						value={this.state.password}
						type="password"
						onChange={this.onChange}
						required
					/>
					<Button
						type="submit"
						style={styles.button}
						variant="raised"
						color="primary"
					>
						Login
					</Button>

					<Link to="/register">
						<Button style={styles.button} variant="raised" color="secondary">
							Register
						</Button>
					</Link>
				</Paper>
			</form>
		);
	}
}
const styles = {
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
		textAlign: "center",
		required: "hidden"
	},
	paper: {
		padding: 20,
		overflow: "auto"
	},
	button: {
		width: 300,
		marginBottom: 10
	}
};
