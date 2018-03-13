import React from "react";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import { AccountCircle, Home } from "material-ui-icons/";
import Menu, { MenuItem } from "material-ui/Menu";
import Button from "material-ui/Button";
import { logout } from "../helpers/auth";
import { firebaseAuth } from "../helpers/dbCon";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isAuthed: false,
			anchorEl: null
		};
	}

	handleChange = (event, checked) => {
		this.setState({ isAuthed: checked });
	};

	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	//check to see if user is authenticated with firebase
	//if user is authed set auth state to true, else false
	componentDidMount() {
		this.removeListener = firebaseAuth().onAuthStateChanged(user => {
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

	//component mount has to unmount
	componentWillUnmount() {
		this.removeListener();
	}

	render() {
		const { auth, anchorEl } = this.state;
		const open = Boolean(anchorEl);

		//add Authed profile icon with logout
		const authedNav = this.state.isAuthed ? (
			<div>
				<IconButton
					aria-owns={open ? "menu-appbar" : null}
					aria-haspopup="true"
					onClick={this.handleMenu}
					color="inherit"
				>
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
					<MenuItem
						onclick={() => {
							logout();
						}}
					>
						Logout
					</MenuItem>
				</Menu>
			</div>
		) : (
			<Link to="/login">
				<Button color="inherit">Login</Button>
			</Link>
		);

		//home button by default
		const topbarButtons = (
			<div>
				<Link to="/">
					<Menu />
				</Link>
				{authedNav}
			</div>
		);

		return (
			<div>
				<AppBar>
					<Toolbar>
						<IconButton
							style={styles.menuButton}
							color="inherit"
							aria-label="Menu"
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="title" color="inherit">
							fit<b>Me</b>
						</Typography>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

const styles = {
	root: {
		flexgrow: 1
	},
	flex: {
		flex: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	}
};
