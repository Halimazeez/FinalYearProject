import React from "react";
import { AccountCircle, Home, MenuIcon, Dashboard } from "material-ui-icons/";
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

  handleLogout = () => {
    this.handleClose();
    logout();
  };

  //check to see if user is authenticated with firebase

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    //hold authenticated header right button state
    const authedButtons = this.props.isAuthed ? (
      <div style={styles.rightButtons}>
        <Link to="/dashboard" style={styles.link}>
          <IconButton color="inherit">
            <Dashboard />
          </IconButton>
        </Link>
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
          <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    ) : (
      //hold not authenticated auth state
      <div style={styles.loginButton}>
        <Link to="/home" style={styles.link}>
          <IconButton color="inherit">
            <Home />
          </IconButton>
        </Link>
        <Link to="/home/login" style={styles.link}>
          <Button color="inherit">Login</Button>
        </Link>
      </div>
    );

    return authedButtons;
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
