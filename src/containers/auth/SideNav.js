import React from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import Drawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Paper from "material-ui/Paper";
import { AccountCircle, Dashboard } from "material-ui-icons/";
import DraftsIcon from "material-ui-icons/Drafts";
import { withStyles } from "material-ui/styles";

class sideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Drawer
          variant="temporary"
          classes={{ paper: classes.paper }}
          open={this.props.sideNavOpen}
          //onBlur={this.props.toggleSideNav}
          onClick={this.props.toggleSideNav}
        >
          <List>
            <Link to="/dashboard" style={styles.loginLink}>
              <ListItem button divider disableGutters style={styles.gutter}>
                <Dashboard />
              </ListItem>
            </Link>

            <Link to="/workoutcalc" style={styles.loginLink}>
              <ListItem button divider disableGutters style={styles.gutter}>
                <AccountCircle />
              </ListItem>
            </Link>

            <Link to="/profile" style={styles.loginLink}>
              <ListItem button disableGutters style={styles.gutter}>
                <AccountCircle />
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </div>
    );
  }
}

sideNav.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = {
  paper: {
    top: 64,
    width: 60,
    backgroundColor: "#666",
    height: 165
  },
  loginLink: {
    color: "#fff",
    textDecoration: "none"
  },
  gutter: {
    paddingLeft: 18
  }
};

//export with paper class style wrap overwrite
export default withStyles(styles)(sideNav);
