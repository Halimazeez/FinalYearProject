import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Icon from "material-ui/Icon";
import Button from "material-ui/Button";
import { Save } from "material-ui-icons/";

import { firebaseAuth, db } from "../helpers/dbCon";
import Data from "./Data";
import Loading from "../helpers/loading";

class SaveToProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  saveLift = () => {
    const { lifts } = this.props;
    let userid = firebaseAuth().currentUser.uid;
    let docRef = db.collection("users").doc(userid);

    //update lift prop as data pointer for db
    docRef.collection("")
      .set({
        [lifts[]]: this.props.onerepmax,

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
        <Button onClick={this.saveLift} className={classes.icon}>
          Stamp to Profile
        </Button>
      </div>
    );
  }
}

const styles = {
  root: {
    flexGrow: 1,
  },
  icon: {
    "&:hover": {
      color: "inherit"
    }
  }
};

export default withStyles(styles)(SaveToProfile);
