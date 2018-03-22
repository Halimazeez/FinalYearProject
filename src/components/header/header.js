import React from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import PropTypes from "prop-types";
import HeaderButtons from "./headerButtons";
import { firebaseAuth } from "../helpers/dbCon";

export default class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: null,
      isAuthed: false
    };
  }

  //check to see if user is authenticated with firebase
  //prop passing authed called in parent for anti-duplicate state check.
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
    const authedNavToggle = this.state.isAuthed ? (
      <IconButton
        style={styles.menuButton}
        color="inherit"
        onClick={this.props.toggleSideNav}
      >
        <MenuIcon />
      </IconButton>
    ) : null;

    return (
      <AppBar>
        <Toolbar>
          {authedNavToggle}
          <Typography variant="title" color="inherit" style={styles.flex}>
            fit<b>Me</b>
          </Typography>
          <HeaderButtons isAuthed={this.state.isAuthed} />
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
