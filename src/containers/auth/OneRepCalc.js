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
      lifts: [
        { name: "Bench Press", onerepmax: 0, db: "bench" },
        { name: "Deadlift", onerepmax: 0, db: "dead" },
        { name: "Squat", onerepmax: 0, db: "squat" },
        { name: "Overhead Press", onerepmax: 0, db: "ohp" }
      ],
      userWeight: 0
    };
  }

  //four lift validation
  validation = () => {
    const { lifts } = this.state;

    if (
      lifts[0].onerepmax === 0 ||
      lifts[1].onerepmax === 0 ||
      lifts[2].onerepmax === 0 ||
      lifts[3].onerepmax === 0
    ) {
      return true; //disable button if empty
    } else {
      return false; //true if all 4 are > 0
    }
  };

  //get closest to 5kg for weight index of 5 increments
  ticks = () => {
    const { userWeight } = this.state;
    let index = 0;
    if (userWeight > 60) {
      index = Math.round((userWeight - 60) / 5);
    }
    return index;
  };

  //last index of current data object for max bound
  getMax = lift => {
    let index = data[lift][this.ticks()];

    let objectNums = [Object.keys(index)[Object.keys(index).length - 1]];

    let lastElement = parseInt(objectNums, 0);
    //console.log(p);
    return lastElement;
  };

  getMin = lift => {
    let index = data[lift][this.ticks()];

    let objectNums = [Object.keys(index)[Object.keys(index).length - 5]];

    let lastElement = parseInt(objectNums, 0);
    //console.log(p);
    return lastElement;
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

  //set the onerepmax in lifts using num as index
  sendonerepmax = (onerepmax, num) => {
    const { lifts } = this.state;
    lifts[num].onerepmax = onerepmax;
    this.setState({
      lifts
    });
  };

  render() {
    //console.log(JSON.stringify(this.state));
    const { classes } = this.props;
    const isEnabled = this.validation();
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
                      max={this.getMax(lift.db)}
                      min={this.getMin(lift.db)}
                    />
                    <SaveLift
                      className={classes.save}
                      onerepmax={lift.onerepmax}
                      lift={lift.db}
                      disabled={lift.onerepmax === 0}
                    />
                  </Grid>
                </Grid>
              </Panels>
            </Grid>
          ))}
        </Grid>
        <Grid container className={classes.control} justify="center">
          <Grid item>
            <Button disabled={isEnabled}>Goto Workout</Button>
          </Grid>
          <Grid item>
            <SaveToProfile lifts={this.state.lifts} disabled={isEnabled} />
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
    paddingTop: theme.spacing.unit * 2,
    margin: 0
  },
  control: {
    paddingTop: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(OneRepCalc);
