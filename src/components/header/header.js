import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import AccountCircle from "material-ui-icons/AccountCircle";
import { FormControlLabel, FormGroup } from "material-ui/Form";
import Menu, { MenuItem } from "material-ui/Menu";
import Button from "material-ui/Button";

export default class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			auth: false,
			anchorEl: null
		};
	}

	handleChange = (event, checked) => {
		this.setState({ auth: checked });
	};

	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	render() {
		const { auth, anchorEl } = this.state;
		const open = Boolean(anchorEl);
		return (
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
					{auth ? (
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
								<MenuItem onClick={this.handleClose}>My account</MenuItem>
							</Menu>
						</div>
					) : (
						<div>
							<Button color="inherit" style={styles.flex}>
								Login
							</Button>
						</div>
					)}
				</Toolbar>
			</AppBar>
		);
	}
}

const styles = {
	flex: {
		flex: 1
	},

	hiddenButton: {},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	}
};
