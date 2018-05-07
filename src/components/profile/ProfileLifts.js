import React from "react";

import Paper from "material-ui/Paper";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import { AccountCircle } from "material-ui-icons/";
import Icon from "material-ui/Icon";
import Divider from "material-ui/Divider";

class ProfileLifts extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    
    return (
      <Grid container style={styles.root}>
        <Paper style={styles.paper}>
          <Grid item xs={12} style={styles.center}>
            <AccountCircle style={styles.icon} />
          </Grid>
          {this.props.email}

          <Divider />

          <Grid container justify="center">
            <Grid item xs={12}>
              <p>Bench Press: {this.props.bench}</p>
            </Grid>
            <Grid item xs={12}>
              <p>Squat:{this.props.squat}</p>
            </Grid>
            <Grid item xs={12}>
              <p>Deadlift: {this.props.dead}</p>
            </Grid>
            <Grid item xs={12}>
              <p>Overhead Press:{this.props.ohp}</p>
            </Grid>
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
  center: {
    textAlign: "center"
  }
};

export default ProfileLifts;
