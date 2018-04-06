import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import { withStyles } from "material-ui/styles";
import { Home } from "material-ui-icons/";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import Input, { InputLabel } from "material-ui/Input";

class ControlPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root} align="center">
        <Grid item xs={12}>
          <Typography className={classes.header}>{this.props.main}</Typography>
          <Typography className={classes.header}>{this.props.title}</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subheading" className={classes.subHeader}>
            <strong>Your One-Rep-Maxs:</strong> (kg)
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container className={classes.lifts}>
            {this.state.lifts.map((lift, index) => (
              <Grid xs={3} key={index}>
                <Typography className={classes.liftHeader}>
                  Your weight: 
                </Typography>

              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

ControlPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 10
  },
  header: {
    fontSize: 50,
    fontWeight: 250
  },
  lifts: {
    paddingLeft: 25
  },
  inputs: {
    paddingLeft: 20,
    width: 50,
    color: "inherit"
  },
  subHeader: {
    paddingBottom: theme.spacing.unit
  }
});

export default withStyles(styles)(ControlPanel);
