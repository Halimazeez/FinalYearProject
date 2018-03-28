import React from "react";
import Grid from "material-ui/Grid";
import { withStyles } from "material-ui/styles";

import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import PropTypes from "prop-types";
import { FormLabel } from "material-ui/Form";
import Divider from "material-ui/Divider";
import TextField from "material-ui/TextField";
import Progress from "./progress";
import Button from "material-ui/Button";

class Lift extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onerepmax: null,
      weight: "",
      reps: ""
    };
  }

  calculateMax = () => {
    this.setState({
      // Use Math.round with one-rep-max formula to get int value
      onerepmax: Math.round(this.state.weight * (1 + this.state.reps / 30))
    });
  };

  onChange = e =>
    this.setState({
      [e.target.id]: e.target.value
    });

  render() {
    const { classes, text, max } = this.props;
    const { onerepmax } = this.state;

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
              value={this.state.reps}
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
              value={this.state.weight}
              onBlur={this.calculateMax}
            />
          </Grid>

          <Grid item xs={11} className={classes.progress}>
            <Typography variant="subheading">
              {text} Strength Index:{onerepmax}
            </Typography>

            <Progress onerepmax={onerepmax} max={max}/>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Lift.propTypes = {
  text: PropTypes.string,
  classes: PropTypes.object.isRequired
};

const styles = {
  root: {
    //  flexGrow: 1,
    padding: 10
  },
  liftAt: {
    paddingTop: 25,
    textAlign: "center"
  },
  inputs: {
    width: "100%",
  },
  progress: {
    marginTop: 20,
  },
  liftContainer: {
    paddingBottom: 50
  }
};

export default withStyles(styles)(Lift);
