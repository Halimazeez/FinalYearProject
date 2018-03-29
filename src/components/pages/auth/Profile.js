import React from "react";

import { firebaseAuth, db } from "../../helpers/dbCon";
import Loading from "../../helpers/loading";
import ProfileLifts from "../../profile/ProfileLifts";
//import { logout } from "../helpers/auth";
class Profile extends React.Component {
  constructor() {
    super();
    //  this.user = firebaseAuth().currentUser;

    //  this.unsubscribe = null;
    this.state = {
      ohp: "",
      bench: "",
      squat: [],
      dead: "",
      email: "",
      loading: true
    };
    //console.log(Object.keys(this.state.data[0]));
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
              this.setState({
                ohp: doc.data().ohp,
                bench: doc.data().bench,
                dead: doc.data().dead,
                squat: doc.data().squat,
                email: doc.data().email,
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

    return <ProfileLifts {...this.state} />;
  }
}

export default Profile;