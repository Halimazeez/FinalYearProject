import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import Divider from "material-ui/Divider";
import { withStyles } from "material-ui/styles";
import { TrendingUp } from "material-ui-icons/";
import Grid from "material-ui/Grid";
import List, {
  ListItemAvatar,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from "material-ui/List";
import ListSubheader from "material-ui/List/ListSubheader";

import Draw from "./Draw";
import Loading from "../helpers/loading";

import { firebaseAuth, db } from "../helpers/dbCon";

class TimeStamps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lifts: [],
      loading: true
    };
  }
  /*
  .then((querySnapshot) {
  querySnapshot.forEach(function(doc) {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  });
});*/
  componentDidMount() {
    const { lifts } = this.state;
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        let userid = firebaseAuth().currentUser.uid;
        let docRef = db.collection("users").doc(userid);

        docRef
          .collection("profile")
          .get()

          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              console.log(doc.id, " => ", doc.data());
              lifts.push(doc.data());
              this.setState({
                lifts,
                loading: false
              });
            });
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
    const { classes } = this.props;
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <Draw title="Progression" Icon={TrendingUp}>
        <List className={classes.list}>
          <Grid container justify="center" align="center">
            {this.state.lifts.map((value, index) => (
              <div className={classes.divList} key={index}>
                <ListSubheader>{value.timeStamp}</ListSubheader>
                <ListSubheader className={classes.body}>
                  <strong>Body Weight:</strong>
                  <span className={classes.bodyWeight}> {value.userWeight}</span>
                </ListSubheader>
                <ListItem divider className={classes.listItems}>
                  <Grid item xs>
                    <ListItemText primary={value.bench} secondary="Bench" />
                  </Grid>
                  <Grid item xs>
                    <ListItemText primary={value.dead} secondary="Deadlift" />
                  </Grid>
                  <Grid item xs>
                    <ListItemText primary={value.squat} secondary="Squat" />
                  </Grid>
                  <Grid item xs>
                    <ListItemText primary={value.bench} secondary="Overhead" />
                  </Grid>
                </ListItem>
              </div>
            ))}
          </Grid>
        </List>
      </Draw>
    );
  }
}

TimeStamps.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  list: {
    padding: 0
  },
  listItems: {
    textAlign: "center"
  },
  divList: {
    width: "100%"
  },
  body: {
    lineHeight: 0,
    paddingBottom: 10
  },
  bodyWeight: {
    color: "red"
  }
});
export default withStyles(styles)(TimeStamps);
