import React from "react";
import { AccountCircle, Home } from "material-ui-icons/";
import IconButton from "material-ui/IconButton";
import Menu, { MenuItem } from "material-ui/Menu";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";
import { firebaseAuth } from "../helpers/dbCon";
import { logout } from "../helpers/auth";

export default class HeaderButtons extends React.Component {
	constructor() {
		super();

		this.state = {
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
			//if user is authed set auth state to true, else false
			if (user) {
				this.setState({
					isAuthed: true,
					loading: false
				});
			} else {
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
			<div>
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
			</div>
		) : (
			<div style={styles.loginButton}>
				<Link to="/login" style={styles.loginLink}>
					<Button color="inherit">Login</Button>
				</Link>
			</div>
		);

		//home button by default
		const topbarButtons = (
			<div style={styles.rightButtons}>
				<Link to="/" style={styles.homeBtn}>
					<IconButton color="inherit">
						<Home />
					</IconButton>
				</Link>
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
	homeBtn: {
		color: "inherit"
	},
	loginLink: {
		color: "inherit",
		textDecoration: "none"
	},
	loginButton: {
		margin: "auto"
	}
};
