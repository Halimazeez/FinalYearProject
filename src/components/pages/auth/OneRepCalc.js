import React from "react";
import { Link } from "react-router-dom";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
import PropTypes from "prop-types";
import Lift from "../../onerepcalc/Lift";
import { Home } from "material-ui-icons/";

export const OneRepCalc = () => {
  return (
    <Grid container justify="center" style={styles.root}>
      <Grid item xs={8}>
        <Lift Icon={Home} title="Bench Press" />
      </Grid>

      <Grid item xs={8}>
        <Lift Icon={Home} title="Deadlift" />
      </Grid>

      <Grid item xs={8}>
        <Lift Icon={Home} title="Squat" />
      </Grid>

      <Grid item xs={8}>
        <Lift Icon={Home} title="Overhead Press" />
      </Grid>
    </Grid>
  );
};

export default OneRepCalc;

const styles = {
  root: {
    margin: 0,
    width: "100%"
  }
};
