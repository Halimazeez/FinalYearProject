import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import { withStyles } from "material-ui/styles";
import { FitnessCenter } from "material-ui-icons/";
import Button from "material-ui/Button";

import Lift from "../../components/onerepcalc/Lift";
import Panels from "../../components/onerepcalc/Panels";
import Progress from "../../components/onerepcalc/Progress";
import SaveLift from "../../components/onerepcalc/SaveLift";
import ControlPanel from "../../components/onerepcalc/ControlPanel";
import SaveToProfile from "../../components/onerepcalc/SaveToProfile";
import { data } from "../../components/onerepcalc/Data";

import { firebaseAuth, db } from "../../components/helpers/dbCon";
import Loading from "../../components/helpers/loading";

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
      userWeight: 0,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    const { lifts } = this.state;
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        let userid = firebaseAuth().currentUser.uid;
        let docRef = db.collection("users").doc(userid);

        docRef
          .get()
          .then(doc => {
            if (doc.exists) {
              //get user ORM and set to current states
              lifts[0].onerepmax = doc.data().bench;
              lifts[1].onerepmax = doc.data().dead;
              lifts[2].onerepmax = doc.data().squat;
              lifts[3].onerepmax = doc.data().ohp;
              this.setState({
                lifts,
                userWeight: doc.data().userWeight,
                loading: false
              });
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          })
          .catch(error => {
            console.log("Error getting document:", error);
          });

        //this.setState({ data: data });
      } else {
        console.log("error");
      }
    });
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
      if (e.target.value < 0) {
        this.setState(
          {
            error: 1,
            userWeight: 0
          },
          () => {
            this.ticks();
          }
        );
      } else {
        this.setState(
          {
            error: 0,
            userWeight: e.target.value
          },
          () => {
            this.ticks();
          }
        );
      }
    } else {
      this.setState(
        {
          error: 1,
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
    if (this.state.loading) {
      return <Loading />;
    }
    //console.log(JSON.stringify(this.state));
    const { classes } = this.props;
    const isEnabled = this.validation();
    return (
      <Grid container className={classes.root} justify="center">
        <Grid
          container
          justify="center"
          spacing={16}
          className={classes.control}
        >
          <Grid item xs={12} lg={2} className={classes.control}>
            <ControlPanel
              userWeight={this.state.userWeight}
              onChange={this.weightChange.bind(this)}
              error={this.state.error}
            />
          </Grid>
          <Grid item xs={12} lg={2}>
            <Grid
              container
              className={classes.buttons}
              spacing={8}
              align="center"
              direction="column"
            >
              <Grid item xs>
                <Link to="/dashboard/workoutcalc" className={classes.link}>
                  <Button
                    disabled={isEnabled}
                    variant="raised"
                    className={classes.buttonStyle}
                  >
                    Generate Workout
                  </Button>
                </Link>
              </Grid>
              <Grid item xs>
                <SaveToProfile
                  lifts={this.state.lifts}
                  userWeight={this.state.userWeight}
                  disabled={isEnabled}
                  onChange={this.state}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.grid} justify="center" spacing={16}>
          {this.state.lifts.map((lift, liftIndex) => (
            <Grid item lg={5} xs={12} key={liftIndex}>
              <Panels Icon={FitnessCenter} title={lift.name}>
                <Grid container align="center">
                  <Grid item xs={12}>
                    <Lift
                      text={lift.name}
                      onerepmax={lift.onerepmax}
                      num={liftIndex}
                      sendonerepmax={this.sendonerepmax.bind(this)}
                    />
                  </Grid>
                  <Grid container justify="center">
                    <Grid item xs={10} className={classes.progress}>
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
                </Grid>
              </Panels>
            </Grid>
          ))}
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
    flexGrow: 1,
    marginTop: 70
  },
  grid: {
    paddingTop: theme.spacing.unit,
    margin: 0
  },
  control: {
    paddingTop: 0,
    margin: 0
  },
  buttonStyle: {
    minWidth: 190,
    height: 42
  },
  link: {
    textDecoration: "none"
  }
});

export default withStyles(styles)(OneRepCalc);
