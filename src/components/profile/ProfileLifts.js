import React from "react";

import Paper from "material-ui/Paper";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import { AccountCircle } from "material-ui-icons/";
import Icon from "material-ui/Icon";
import Divider from "material-ui/Divider";
import List, {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from "material-ui/List";

class ProfileLifts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid container style={styles.root}>
        <Paper style={styles.paper}>
          <Grid item xs={12} align="center">
            <AccountCircle style={styles.icon} />
          </Grid>

          <Grid item xs={12} align="center">
            <Typography>
              <p>{this.props.email}</p>
            </Typography>
          </Grid>

          <Divider />

          
          <Grid container justify="center">
            <Grid item xs={6}>
              <Typography variant="title">
                <p>Bench Press ORM: </p>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="title">
                <p>{this.props.bench}</p>
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="title">
                <p>Deadlift ORM: </p>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="title">
                <p>{this.props.dead}</p>
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="title">
                <p>Squat ORM: </p>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="title">
                <p>{this.props.squat}</p>
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="title">
                <p>Overhead Press ORM: </p>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="title">
                <p>{this.props.ohp}</p>
              </Typography>
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
  }
};

export default ProfileLifts;
