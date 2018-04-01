import React from "react";

import RegisterForm from "../components/forms/RegisterForm";
import history from "../components/helpers/history";
import { firebaseAuth } from "../components/helpers/dbCon";

export default class RegisterPage extends React.Component {
  componentDidMount() {
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        history.push("/dashboard");
      } else {
        //otherwise goto login page
      }
    });
  }
  render() {
    return (
      <div>
        <RegisterForm />
      </div>
    );
  }
}
