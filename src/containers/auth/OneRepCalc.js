import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import { withStyles } from "material-ui/styles";
import { Home } from "material-ui-icons/";

import Lift from "../../components/onerepcalc/Lift";
import Panels from "../../components/onerepcalc/Panels";
import Progress from "../../components/onerepcalc/Progress";
import SaveLift from "../../components/onerepcalc/SaveLift";
import ControlPanel from "../../components/onerepcalc/ControlPanel";

class OneRepCalc extends React.Component {
  constructor() {
    super();
    this.state = {
      weight: "",
      lifts: [
        { name: "Bench Press", onerepmax: 0, db: "bench" },
        { name: "Deadlift", onerepmax: 0, db: "dead" },
        { name: "Squat", onerepmax: 0, db: "squat" },
        { name: "Overhead Press", onerepmax: 0, db: "ohp" }
      ]
    };
  }
  sendonerepmax = (onerepmax, num) => {
    const { lifts } = this.state;
    //set the onerepmax in lifts using num as index
    lifts[num].onerepmax = onerepmax;
    this.setState({
      lifts
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} justify="center">
        <Grid item md={5} xs={12} className={classes.grid}>
          <ControlPanel />
        </Grid>
        {this.state.lifts.map((lift, liftIndex) => (
          <Grid item md={5} xs={12} className={classes.grid} key={liftIndex}>
            <Panels Icon={Home} title={lift.name}>
              <Grid container justify="center">
                <Grid item xs={12}>
                  <Lift
                    text={lift.name}
                    onerepmax={lift.onerepmax}
                    num={liftIndex}
                    sendonerepmax={this.sendonerepmax.bind(this)}
                  />
                </Grid>
                <Grid item xs={10} align="center" className={classes.progress}>
                  <Progress max={150} value={lift.onerepmax} />
                  <SaveLift
                    className={classes.save}
                    onerepmax={lift.onerepmax}
                    lift={lift.db}
                  />
                </Grid>
              </Grid>
            </Panels>
          </Grid>
        ))}
      </Grid>
    );
  }
}

OneRepCalc.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grid: {
    padding: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(OneRepCalc);
