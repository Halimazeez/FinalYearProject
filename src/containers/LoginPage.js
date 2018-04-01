import React from "react";

import history from "../components/helpers/history";
import { firebaseAuth } from "../components/helpers/dbCon";
import LoginForm from "../components/forms/LoginForm";

export default class LoginPage extends React.Component {
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
        <LoginForm />
      </div>
    );
  }
}
