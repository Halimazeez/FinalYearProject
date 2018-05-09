import React from "react";
import PropTypes from "prop-types";

import Grid from "material-ui/Grid";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import TextField from "material-ui/TextField";

class Lift extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reps: "",
      weight: "",
      onerepmax: this.props.onerepmax
    };
  }

  //calculate the one-rep-max as prop then pass with index
  calculateMax = () => {
    if (this.state.weight != "" && this.state.reps != "") {
      let max = Math.round(this.state.weight * (1 + this.state.reps / 30));
      this.setState(
        {
          // Use Math.round with one-rep-max formula to get int value
          onerepmax: max
        },
        () => {
          this.props.sendonerepmax(max, this.props.num);
        }
      );
    }
  };

  onChange = e => {
    this.setState(
      {
        [e.target.id]: e.target.value
      },
      () => {
        this.calculateMax();
      }
    );
  };

  render() {
    const { classes, text, max, lift } = this.props;
    const { onerepmax, weight, reps } = this.state;

    return (
      <Grid container justify="center" className={classes.root}>
        <Grid item xs={8} className={classes.spacing}>
          <TextField
            id="reps"
            label="Reps"
            placeholder="Enter Reps"
            type="number"
            className={classes.inputs}
            onChange={this.onChange}
            value={reps}
            error={reps > 14}
            helperText={reps > 14 ? "Maximum repetitions should range between 1-14" : ""}
          />
        </Grid>

        <Grid item xs={8}>
          <TextField
            id="weight"
            label="Weight"
            placeholder="Enter Weight"
            type="number"
            className={classes.inputs}
            onChange={this.onChange}
            value={weight}
            error={weight > 499}
            helperText={weight>499 ? "You don't lift that much" : ""}
          />
        </Grid>

        <Grid item xs={11} className={classes.progress}>
          <Typography variant="subheading">
            {text} One-Rep-Max: {onerepmax}
          </Typography>
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
    width: "50%",
    textAlign: "center"
  },
  liftContainer: {
    paddingBottom: 50
  },
  spacing: {
    marginBottom: 5
  }
};

export default withStyles(styles)(Lift);
