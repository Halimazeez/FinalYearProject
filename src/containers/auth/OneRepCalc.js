import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import { withStyles } from "material-ui/styles";
import { Home } from "material-ui-icons/";
import Button from "material-ui/Button";

import Lift from "../../components/onerepcalc/Lift";
import Panels from "../../components/onerepcalc/Panels";
import Progress from "../../components/onerepcalc/Progress";
import SaveLift from "../../components/onerepcalc/SaveLift";
import ControlPanel from "../../components/onerepcalc/ControlPanel";
import SaveToProfile from "../../components/onerepcalc/SaveToProfile";

import { data } from "../../components/onerepcalc/Data";

class OneRepCalc extends React.Component {
  constructor() {
    super();
    this.state = {
      userWeight: 0,
      lifts: [
        { name: "Bench Press", onerepmax: 0, db: "bench" },
        { name: "Deadlift", onerepmax: 0, db: "dead" },
        { name: "Squat", onerepmax: 0, db: "squat" },
        { name: "Overhead Press", onerepmax: 0, db: "ohp" }
      ],
      levels: ["Beginner", "Intermediate", "Advanced", "Elite"],
      marks: []
    };
  }
  ticks = () => {
    const { userWeight } = this.state;
    //get closest to 5kg for weight index of 5 increments
    let x = 0;
    if (userWeight > 60) {
      x = Math.round((userWeight - 60) / 5);
    }
    return x;
  };

  weightChange = e => {
    const { userWeight } = this.state;
    if (e.target.value < 140) {
      this.setState(
        {
          userWeight: e.target.value
        },
        () => {
          this.ticks();
        }
      );
    } else {
      this.setState(
        {
          userWeight: 140
        },
        () => {
          this.ticks();
        }
      );
    }
  };

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
        <Grid item xs={12} className={classes.control}>
          <ControlPanel
            userWeight={this.state.userWeight}
            onChange={this.weightChange.bind(this)}
          />
        </Grid>
        <Grid container className={classes.grid} justify="center" spacing={16}>
          {this.state.lifts.map((lift, liftIndex) => (
            <Grid item lg={5} xs={12} key={liftIndex}>
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
                  <Grid
                    item
                    xs={10}
                    align="center"
                    className={classes.progress}
                  >
                    <Progress
                      value={lift.onerepmax}
                      marks={data[lift.db][this.ticks()]}
                    />
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
        <Grid container className={classes.control} justify="center">
          <Grid item>
            <Button>Goto Workout</Button>
          </Grid>
          <Grid item>
            <SaveToProfile lifts={this.state.lifts}/>
          </Grid>
        </Grid>
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
    paddingTop: theme.spacing.unit * 2
  },
  control: {
    paddingTop: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(OneRepCalc);
