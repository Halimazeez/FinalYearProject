import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import { withStyles } from "material-ui/styles";
import { Home } from "material-ui-icons/";

import { firebaseAuth, db } from "../../components/helpers/dbCon";
import Loading from "../../components/helpers/loading";
import ControlPanel from "../../components/workoutcalc/ControlPanel";
import WeeklyForm from "../../components/workoutcalc/WeeklyForm";

class OneRepCalc extends React.Component {
  constructor() {
    super();
    this.state = {
      ohp: "",
      bench: "",
      squat: "",
      dead: "",
      loading: true,
      week: [1,2,3,4]
    };
  }

  componentDidMount() {
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        //set database reference
        let userid = firebaseAuth().currentUser.uid;
        let docRef = db.collection("users").doc(userid);

        //getting user data
        docRef
          .get()
          .then(doc => {
            if (doc.exists) {
              //set user data to states
              this.setState({
                ohp: doc.data().ohp,
                bench: doc.data().bench,
                dead: doc.data().dead,
                squat: doc.data().squat,
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

  render() {

    if (this.state.loading) {
      return <Loading />;
    }

    const { classes } = this.props;
    return (
      <Grid container justify="center" className={classes.root}>
        <Grid item xs={12} sm={9} md={6} lg={5} xl={4}>
          <Paper>
            <ControlPanel
              bench={this.state.bench}
              ohp={this.state.ohp}
              squat={this.state.squat}
              dead={this.state.dead}
              title="Workout Calculator"
              main="5/3/1"
            />
          </Paper>
        </Grid>
        <Grid container className={classes.lifts} justify="center">
          {this.state.week.map((value, index) => (
            <Grid item xs={12} sm={11} md={10} key={index}>
              <WeeklyForm
                week={value}
                bench={this.state.bench}
                ohp={this.state.ohp}
                squat={this.state.squat}
                dead={this.state.dead}
              />
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

const styles = {
  root: {
    flexGrow: 1,
    paddingBottom: 10
  }
};

export default withStyles(styles)(OneRepCalc);
