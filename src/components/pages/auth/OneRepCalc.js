import React from "react";
import { Link } from "react-router-dom";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
import PropTypes from "prop-types";
import Lift from "../../onerepcalc/Lift";
import Panels from "../../onerepcalc/Panels";
import { Home } from "material-ui-icons/";

export const OneRepCalc = () => {
  return (
    <Grid container style={styles.root} justify="center">
      <Grid item xs={10} alignItems="center">
        <Panels Icon={Home} title="Bench Press">
          <Lift text="Bench Press" />
        </Panels>
      </Grid>

      <Grid item xs={10}>
        <Panels Icon={Home} title="Deadlift">
          <Lift text="Deadlift" />
        </Panels>
      </Grid>

      <Grid item xs={10}>
        <Panels Icon={Home} title="Squat">
          <Lift text="Squat" />
        </Panels>
      </Grid>

      <Grid item xs={10}>
        <Panels Icon={Home} title="Overhead">
          <Lift text="Overhead Press" />
        </Panels>
      </Grid>
    </Grid>
  );
};

export default OneRepCalc;

const styles = {
  root: {
    margin: 0
    //width: "100%"
  }
};
