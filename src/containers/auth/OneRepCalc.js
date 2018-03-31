import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
import { Home } from "material-ui-icons/";

import Lift from "../../components/onerepcalc/Lift";
import Panels from "../../components/onerepcalc/Panels";


export const OneRepCalc = () => {
  return (
    <Grid container style={styles.root} justify="center">
      <Grid item xs={10}>
        <Panels Icon={Home} title="Bench Press">
          <Lift text="Bench Press" max={140} lift=""/>
        </Panels>
      </Grid>

      <Grid item xs={10}>
        <Panels Icon={Home} title="Deadlift">
          <Lift text="Deadlift" max={200} lift="dead"/>
        </Panels>
      </Grid>

      <Grid item xs={10}>
        <Panels Icon={Home} title="Squat">
          <Lift text="Squat" max={180} lift="squat"/>
        </Panels>
      </Grid>

      <Grid item xs={10}>
        <Panels Icon={Home} title="Overhead Press">
          <Lift text="Overhead Press" max={100} lift="ohp"/>
        </Panels>
      </Grid>
    </Grid>
  );
};

export default OneRepCalc;

const styles = {
  root: {
    flexGrow: 1
  }
};
