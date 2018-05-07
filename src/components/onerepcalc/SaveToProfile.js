import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Icon from "material-ui/Icon";
import Button from "material-ui/Button";
import { Save } from "material-ui-icons/";
import moment from "moment";

import { firebaseAuth, db } from "../helpers/dbCon";
import Data from "./Data";
import Loading from "../helpers/loading";

class SaveToProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  saveStamp = () => {
    let curTime = moment();
    let formatTime = curTime.format("MMM D YYYY (HH:MM)").toString();
    console.log(formatTime);

    const { lifts } = this.props;
    let userid = firebaseAuth().currentUser.uid;
    let docRef = db.collection("users").doc(userid);

    //update lift prop as data pointer for db

    docRef
      .set({
        [lifts[0].db]: lifts[0].onerepmax,
        [lifts[1].db]: lifts[1].onerepmax,
        [lifts[2].db]: lifts[2].onerepmax,
        [lifts[3].db]: lifts[3].onerepmax
      })
      .then(lift => {
        console.log("Document successfully updated!");
      })
      .catch(error => {
        // The document probably doesn't exist.

        console.error("Error updating document: ", error);
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <div style={styles.root}>
        <Button
          onClick={this.saveStamp}
          className={classes.icon}
          disabled={this.props.disabled}
        >
          Stamp to Profile
        </Button>
      </div>
    );
  }
}

const styles = {
  root: {
    flexGrow: 1
  },
  icon: {
    "&:hover": {
      color: "inherit"
    }
  }
};

export default withStyles(styles)(SaveToProfile);
