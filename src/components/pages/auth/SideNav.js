import React from "react";
import Drawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Paper from "material-ui/Paper";
import InboxIcon from "material-ui-icons/Inbox";
import DraftsIcon from "material-ui-icons/Drafts";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { Link, Redirect } from "react-router-dom";

class sideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchor: "left"
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
              <ListItem button divider>
                <InboxIcon />
                {/* }<ListItemText primary="One-Rep-Max" /> */}
              </ListItem>
            </Link>

            <Link to="/dashboard/workoutcalc" style={styles.loginLink}>
              <ListItem button divider>
                <InboxIcon />
                {/* <ListItemText primary="Workout Calculator" />  */}
              </ListItem>
            </Link>
          </List>

          <List>
            <ListItem button disabled>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              {/*<ListItemText primary="About Us" /> */}
            </ListItem>

            <ListItem button disabled>
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
    height: "calc(100vh - 64px)",
    backgroundColor: "#666"
  },
  loginLink: {
    color: "#fff",
    textDecoration: "none"
  }
};

//export with paper class style wrap overwrite
export default withStyles(styles)(sideNav);
