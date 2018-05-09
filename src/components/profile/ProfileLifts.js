import React from "react";

import Paper from "material-ui/Paper";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import { AccountCircle } from "material-ui-icons/";
import Icon from "material-ui/Icon";
import Divider from "material-ui/Divider";
import Avatar from "material-ui/Avatar";
import List, {
  ListItemAvatar,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from "material-ui/List";

class ProfileLifts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lifts: [1, 2, 3, 4]
    };
  }
  render() {
    console.log(...this.props);
    return (
      <Grid container style={styles.root} justify="center">
        <Paper style={styles.paper}>
          <Grid item xs={12} align="center">
            <AccountCircle style={styles.icon} />
          </Grid>

          <Grid item xs={12} align="center">
            <Typography style={styles.email}>{this.props.email}</Typography>
          </Grid>

          <Divider />

          <Grid item xs={12}>
            <List style={styles.list}>
              <Grid container align="center">
                {this.props.lifts.map((value, index) => (
                  <ListItem key={index} divider style={styles.listItems}>
                    <Grid item xs={3}>
                      <ListItemAvatar style={styles.hack}>
                        <Avatar src={require("../../layout/compound.svg")} />
                      </ListItemAvatar>
                    </Grid>
                    <Grid item xs={5}>
                      <ListItemText
                        primary={value.name}
                        secondary="One-Rep-Max"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <ListItemText primary={value.onerepmax} />
                    </Grid>
                  </ListItem>
                ))}
                <ListItem>
                  <ListItemText secondary={"Last Update: "+this.props.lastUpdate} />
                </ListItem>
              </Grid>
            </List>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}
const styles = {
  root: {
    flexGrow: 1,
    paddingTop: 10,
    maxWidth: 400,
    position: "relative",
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto"
  },
  paper: {
    width: "100%"
  },
  icon: {
    width: 100,
    height: 100
  },
  list: {
    padding: 0
  },
  listItems: {
    justifyContent: "Center"
  },
  hack: {
    overflow: "unset"
  },
  email: {
    padding: 10
  }
};

export default ProfileLifts;
