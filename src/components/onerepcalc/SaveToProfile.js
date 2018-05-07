import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import classNames from "classnames";

import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Icon from "material-ui/Icon";
import Button from "material-ui/Button";
import { Save, Check } from "material-ui-icons/";
import green from "material-ui/colors/green";
import { CircularProgress } from "material-ui/Progress";

import { firebaseAuth, db } from "../helpers/dbCon";
import Data from "./Data";
import Loading from "../helpers/loading";

class SaveToProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      success: false
    };
    this.baseState = this.state;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.onChange !== this.props.onChange) {
      this.setState(this.baseState);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  saveStamp = () => {
    let curTime = moment();
    let formatTime = curTime.format("Do MMM YYYY (HH:MM)").toString();
    console.log(formatTime);

    const { lifts } = this.props;
    let userid = firebaseAuth().currentUser.uid;
    let docRef = db.collection("users").doc(userid);

    //update user lifts & bodyweight
    docRef
      .update({
        [lifts[0].db]: lifts[0].onerepmax,
        [lifts[1].db]: lifts[1].onerepmax,
        [lifts[2].db]: lifts[2].onerepmax,
        [lifts[3].db]: lifts[3].onerepmax,
        userWeight: this.props.userWeight
      })
      .then(lift => {
        console.log("Document successfully updated!");
      })
      .catch(error => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });

    if (!this.state.loading) {
      this.setState(
        {
          success: false,
          loading: true
        },
        () => {
          this.timer = setTimeout(() => {
            this.setState({
              loading: false,
              success: true
            });
          }, 2000);
        }
      );
    }
  };
  timer = undefined;

  render() {
    const { classes } = this.props;
    const { loading, success } = this.state;
    const buttonClassname = classNames({
      [classes.buttonStyle]: true,
      [classes.buttonSuccess]: success
    });
    return (
      <div style={styles.root}>
        <Button
          variant="raised"
          color="primary"
          onClick={this.saveStamp}
          className={buttonClassname}
          disabled={this.props.disabled || loading}
        >
          {success ? (
            <Check className={classes.leftIcon} />
          ) : (
            <Save className={classes.leftIcon} />
          )}

          {success ? "Saved" : "Save to Profile"}

          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </Button>
      </div>
    );
  }
}

SaveToProfile.propTypes = {
  classes: PropTypes.object.isRequired
};
const styles = theme => ({
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  },
  root: {
    flexGrow: 1
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  buttonStyle: {
    minWidth: 190
  }
});

export default withStyles(styles)(SaveToProfile);
