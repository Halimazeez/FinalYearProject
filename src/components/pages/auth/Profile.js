import React from "react";
import Paper from "material-ui/Paper";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import Typography from "material-ui/Typography";
import { firebaseAuth, db } from "../../helpers/dbCon";
import Grid from "material-ui/Grid";
import { AccountCircle } from "material-ui-icons/";
import Icon from "material-ui/Icon";
import Divider from "material-ui/Divider";
//import { logout } from "../helpers/auth";
class Profile extends React.Component {
  constructor() {
    super();
    //  this.user = firebaseAuth().currentUser;

    //  this.unsubscribe = null;
    this.state = {
      ohp: "",
      bench: "",
      squat: "",
      dead: "",
      loading: false,
      data: ""
    };
  }

  componentDidMount() {
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        let userid = firebaseAuth().currentUser.uid;
        let docRef = db.collection("users").doc();
        console.log(userid);
        docRef
          .get()
          .then(function(doc) {
            if (doc.exists) {
              console.log("Document data:", doc.data());
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          })
          .catch(function(error) {
            console.log("Error getting document:", error);
          });
      } else {
        console.log("error");
      }
    });
  }

  render() {
    return (
      <Grid container justify="center" style={styles.root}>
        <Grid item xs={12} sm={8} md={5}>
          <Paper style={styles.paper}>
            <Grid item xs={12} style={styles.center}>
              <AccountCircle style={styles.icon} />
            </Grid>

            <Divider />

            <Grid container>
              <Grid item xs={8}>
                <p>{this.state.ohp}</p>
                <Button>Click me</Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
const styles = {
  root: {
    flexGrow: 1,
    paddingTop: 10
  },
  paper: {
    width: "100%"
  },
  icon: {
    width: 100,
    height: 100
  },
  center: {
    textAlign: "center"
  }
};

export default Profile;
