import React from "react";

import { firebaseAuth, db } from "../../components/helpers/dbCon";
import Loading from "../../components/helpers/loading";

import ProfileLifts from "../../components/profile/ProfileLifts";
import TimeStamps from "../../components/profile/TimeStamps";

//import { logout } from "../helpers/auth";

class Profile extends React.Component {
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
      email: ""
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
                email: doc.data().email,
                lastUpdate: doc.data().lastUpdate,
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

    return (
      <div>
        <ProfileLifts {...this.state} />
        <TimeStamps />
      </div>
    );
  }
}

export default Profile;
