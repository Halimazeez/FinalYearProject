import React from "react";
import Button from "material-ui/Button";
import MenuItem from "material-ui/Menu/MenuItem";
import TextField from "material-ui/TextField";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200
	}
});

class LoginForm extends React.Component {
	constructor() {
		super();
		this.state = {
			data: {
				username: ""
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
			<form noValidate autoComplete="off">
				<TextField
					id="Psername"
					label="Username"
					className={classes.textField}
					value={this.state.name}
					onChange={"username"}
					margin="normal"
				/>
				<TextField
					id="Password"
					label="Password"
					className={classes.textField}
					value={this.state.name}
					onChange={"username"}
					margin="normal"
				/>

				<Button variant="raised">Login</Button>
				<Button variant="raised">Register</Button>
			</form>
		);
	}
}
LoginForm.propTypes = {
	classes: PropTypes.object.isRequired
};
export default withStyles(styles)(LoginForm);
