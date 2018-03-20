import React from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import PropTypes from "prop-types";
import HeaderButtons from "./headerButtons";

export default class Header extends React.Component {
  render() {
    return (
      <AppBar>
        <Toolbar>
          <IconButton
            style={styles.menuButton}
            color="inherit"
            onClick={this.props.handleChangeRequestSideNav}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" style={styles.flex}>
            fit<b>Me</b>
          </Typography>

          <HeaderButtons />
        </Toolbar>
      </AppBar>
    );
  }
}
Header.propTypes = {
  handleChangeRequestNavDrawer: PropTypes.func
};
const styles = {
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};
