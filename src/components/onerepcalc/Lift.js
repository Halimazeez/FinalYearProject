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
    width: "100%"
  },
  liftContainer: {
    paddingBottom: 50
  }
};

export default withStyles(styles)(Lift);
