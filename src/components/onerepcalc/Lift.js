import React from "react";
import Grid from "material-ui/Grid";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import { FormLabel } from "material-ui/Form";
import Divider from "material-ui/Divider";
import TextField from "material-ui/TextField";

import Progress from "./Progress";

class Lift extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  calculateMax = () => {
    if (this.state.weight != null && this.state.reps != null) {
      this.setState({
        // Use Math.round with one-rep-max formula to get int value
        onerepmax: Math.round(this.state.weight * (1 + this.state.reps / 30))
      });
    }
  };

  saveLift = () => {};

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { classes, text, max } = this.props;
    const { onerepmax, weight, reps } = this.state;

    return (
      <Grid container className={classes.root}>
        <Grid container justify="center" className={classes.liftContainer}>
          <Grid item md={4} xs={8}>
            <TextField
              id="reps"
              label="Reps"
              placeholder="Enter Reps"
              type="number"
              className={classes.inputs}
              onChange={this.onChange}
              value={reps}
              onBlur={this.calculateMax}
            />
          </Grid>

          <Grid item md={2} xs={8}>
            <Typography className={classes.liftAt}>At:</Typography>
          </Grid>

          <Grid item md={4} xs={8}>
            <TextField
              id="weight"
              label="Weight"
              placeholder="Enter Weight"
              type="number"
              className={classes.inputs}
              onChange={this.onChange}
              value={weight}
              //onBlur={this.calculateMax}
            />
          </Grid>

          <Grid item xs={11} className={classes.progress}>
            <Typography variant="subheading">
              {text} One-Rep-Max: {onerepmax}
            </Typography>
            <Progress
              max={max}
              value={onerepmax}
              {...console.log("1r:" + onerepmax)}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Lift.propTypes = {
  text: PropTypes.string,
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  calculateMax: PropTypes.func
};

const styles = {
  root: {
    flexGrow: 1,
    padding: 10
  },
  liftAt: {
    paddingTop: 25,
    textAlign: "center"
  },
  inputs: {
    width: "100%"
  },
  progress: {
    marginTop: 20
  },
  liftContainer: {
    paddingBottom: 50
  }
};

export default withStyles(styles)(Lift);
