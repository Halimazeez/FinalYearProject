import React from "react";
import { AccountCircle, Home } from "material-ui-icons/";
import IconButton from "material-ui/IconButton";
import Menu, { MenuItem } from "material-ui/Menu";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";
import { firebaseAuth } from "../helpers/dbCon";
import { logout } from "../helpers/auth";
import MenuIcon from "material-ui-icons/Menu";

export default class HeaderButtons extends React.Component {
	constructor() {
		super();

		this.state = {
			loading: null,
			isAuthed: false,
			anchorEl: null
		};
	}

	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	handleProfile = () => {
		this.handleClose();
		logout();
	};

	//check to see if user is authenticated with firebase
	componentWillMount() {
		firebaseAuth().onAuthStateChanged(user => {
			//if user is authed set auth state to true
			if (user) {
				this.setState({
					isAuthed: true,
					loading: true
				});
			} else {
				// else set auth token to false
				this.setState({
					isAuthed: false,
					loading: false
				});
			}
		});
	}

	render() {
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);

		const authedNav = this.state.isAuthed ? (
			<div style={styles.rightButtons}>
				<IconButton color="inherit">
					<Home />
				</IconButton>
				<IconButton onClick={this.handleMenu} color="inherit">
					<AccountCircle />
				</IconButton>
				<Menu
					id="menu-appbar"
					anchorEl={anchorEl}
					anchorOrigin={{
						vertical: "top",
						horizontal: "left"
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "left"
					}}
					open={open}
					onClose={this.handleClose}
				>
					<MenuItem onClick={this.handleClose}>Profile</MenuItem>
					<MenuItem onClick={this.handleProfile}>Logout</MenuItem>
				</Menu>
				<Link to="/dashboard" style={styles.link}>

				</Link>
			</div>
		) : (
			<div style={styles.loginButton}>
				<Link to="/login" style={styles.link}>
					<Button color="inherit">Login</Button>
				</Link>
			</div>
		);

		//home button by default
		const topbarButtons = (
			<div style={styles.rightButtons}>

				{authedNav}
			</div>
		);

		return topbarButtons;
	}
}

const styles = {
	rightButtons: {
		display: "flex"
	},
	link: {
		color: "inherit",
		textDecoration: "none"
	},
	loginButton: {
		margin: "auto"
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	}
};
