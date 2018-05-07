import React from "react";
import PropTypes from "prop-types";

import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";

import HeaderButtons from "./HeaderButtons";
import { firebaseAuth } from "../helpers/dbCon";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const authedNavToggle = this.props.isAuthed ? (
      <IconButton
        style={styles.menuButton}
        color="inherit"
        onClick={this.props.toggleSideNav}
      >
        <MenuIcon />
      </IconButton>
    ) : null;

    return (
      <AppBar elevation={0}>
        <Toolbar>
          {authedNavToggle}
          <Typography variant="title" color="inherit" style={styles.flex}>
            fit<b>Me</b>
          </Typography>
          <HeaderButtons isAuthed={this.props.isAuthed} />
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  toggleSideNav: PropTypes.func
};

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  flex: {
    flex: 1
  }
};
