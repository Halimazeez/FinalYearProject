import React from "react";
import styled from "styled-components";
import Button from "material-ui/Button";
import { withStyles } from 'material-ui/styles';

class LoginForm extends React.Component {
	constructor() {
		super();
		this.state = {
			data: {
				email: "",
				password: ""
			},
			loading: false, // load in state
			errors: {} // error object empty by default
		};
	}
	render() {
		return (
			<form>
				<label htmlfor="email">Email</label>
				<input />
				<StyledButton>
					<Button color="primary" variant="raised">Login</Button>
				</StyledButton>
				<label htmlFor="registertxt">Not a user? Register now</label>
			</form>
		);
	}
}

const StyledButton = styled(Button)`
	/*box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); */
	padding: 0 !IMPORTANT;
	/*background: linear-gradient(to bottom, #499bea 0%, #207ce5 100%); */
	border-radius: 3;
	color: : #2196f3;
	&:hover {

	}
`;

export default LoginForm;
