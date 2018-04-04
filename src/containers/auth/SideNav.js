import React from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import Drawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Paper from "material-ui/Paper";
import InboxIcon from "material-ui-icons/Inbox";
import DraftsIcon from "material-ui-icons/Drafts";
import { withStyles } from "material-ui/styles";


class sideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Drawer
          variant="persistent"
          classes={{ paper: classes.paper }}
          anchor="left"
          open={this.props.sideNavOpen}
        >
          <List>
            <Link to="/dashboard/onerepcalc" style={styles.loginLink}>
              <ListItem button divider disableGutters style={styles.gutter}>
                <InboxIcon />
                {/* }<ListItemText primary="One-Rep-Max" /> */}
              </ListItem>
            </Link>

            <Link to="/dashboard/workoutcalc" style={styles.loginLink}>
              <ListItem button divider disableGutters style={styles.gutter}>
                <InboxIcon />
                {/* <ListItemText primary="Workout Calculator" />  */}
              </ListItem>
            </Link>
          </List>

          <List>
            <ListItem button disabled disableGutters style={styles.gutter}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              {/*<ListItemText primary="About Us" /> */}
            </ListItem>

            <ListItem button disabled disableGutters style={styles.gutter}>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              {/*<ListItemText primary="Contact" /> */}
            </ListItem>
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
