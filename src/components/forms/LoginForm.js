import React from "react";
import Button from "material-ui/Button";
import MenuItem from "material-ui/Menu/MenuItem";
import TextField from "material-ui/TextField";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import blue500 from "material-ui/colors";

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
		const handleChange = username => event => {
			this.setState({
				[username]: event.target.value
			});
		};
	}
	render() {
		const { classes } = this.props;
		return (
			<form className={classes.container} noValidate autoComplete="off">
				<Paper className={classes.paper}>
					<h1 className={classes.header}>Login</h1>
					<TextField
						id="Psername"
						label="Username"
						className={classes.textField}
						value={this.state.username}
						onChange={"username"}
						margin="normal"
					/>
					<TextField
						id="Password"
						label="Password"
						className={classes.textField}
						value={this.state.password}
						type="password"
						onChange={"username"}
						margin="normal"
					/>

					<Button className={classes.button} variant="raised" color="primary">
						Login
					</Button>
					<Button className={classes.button} variant="raised" color="secondary">
						Register
					</Button>
				</Paper>
			</form>
		);
	}
}
LoginForm.propTypes = {
	classes: PropTypes.object.isRequired
};
export default withStyles(styles)(LoginForm);
