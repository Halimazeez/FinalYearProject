import React from "react";
import { createUser } from "../helpers/auth";
import Paper from "material-ui/Paper";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";

function setErrorMsg(error) {
	return {
		registerError: error.message
	};
}

//const isInvalid = passwordOne !== passwordTwo;

export default class RegisterForm extends React.Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",

			registerError: null
		};
	}

	//global onchange for state
	onChange = e =>
		this.setState({
			[e.target.id]: e.target.value,
			//reset the error if exist
			registerError: null
		});

	//submit new user information
	onSubmit = e => {
		e.preventDefault();
		createUser(this.state.email, this.state.password).catch(e =>
			this.setState(setErrorMsg(e)),
		);
	};

	render() {
		return (
			<form onSubmit={this.onSubmit} style={styles.container}>
				<Paper style={styles.paper}>
					<h1>Register</h1>
					<TextField
						id="email"
						label="Email"
						placeholder="Enter your Email"
						style={styles.textField}
						onChange={this.onChange}
						value={this.state.email}
						required
					/>
					<TextField
						id="password"
						type="password"
						label="Password"
						placeholder="Create a password"
						style={styles.textField}
						onChange={this.onChange}
						value={this.state.password}
						required
					/>
					{this.state.registerError && (
						<div>
							<p>Error:{this.state.registerError}</p>
						</div>
					)}
					<Button
						label="register"
						color="primary"
						variant="raised"
						style={styles.button}
						type="submit"
					>
						Register
					</Button>
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
		marginTop: 20,
		marginBottom: 10
	}
};
