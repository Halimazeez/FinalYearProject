import React from "react";
import PropTypes from "prop-types";

import Grid from "material-ui/Grid";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import TextField from "material-ui/TextField";

import Progress from "./Progress";
import SaveLift from "./SaveLift";

class Lift extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reps: "",
      weight: "",
      onerepmax: null
    };
  }

  calculateMax = () => {
    if (this.state.weight != null && this.state.reps != null) {
      this.setState({
        // Use Math.round with one-rep-max formula to get int value
        onerepmax: Math.round(this.state.weight * (1 + this.state.reps / 30))
      });
    }
  };

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { classes, text, max, lift } = this.props;
    const { onerepmax, weight, reps } = this.state;

    return (
      <Grid container justify="center" align="center" className={classes.root}>
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
        <Grid item xs={0} md={1} />
        <Grid item md={4} xs={8}>
          <TextField
            id="weight"
            label="Weight"
            placeholder="Enter Weight"
            type="number"
            className={classes.inputs}
            onChange={this.onChange}
            value={weight}
            onBlur={this.calculateMax}
          />
        </Grid>

        <Grid item xs={11} className={classes.progress}>
          <Typography variant="subheading">
            {text} One-Rep-Max: {onerepmax}
          </Typography>
          <Progress max={max} value={onerepmax} />
        </Grid>

        <Grid container>
          <Grid item xs>
            <SaveLift onerepmax={onerepmax} lift={lift} />
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
    flexGrow: 0,
    padding: 10
  },
  progress: {
    marginTop: 50
  },
  inputs: {
    width: "100%"
  },
  liftContainer: {
    paddingBottom: 50
  }
};

export default withStyles(styles)(Lift);
