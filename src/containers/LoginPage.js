import React from "react";

import history from "../components/helpers/history";
import { firebaseAuth } from "../components/helpers/dbCon";
import LoginForm from "../components/forms/LoginForm";

firebaseAuth().onAuthStateChanged(user => {
  if (user) {
    history.push("/dashboard");
  } else {
    //otherwise goto login page
  }
});

const LoginPage = () => (
  <div>
    <LoginForm />
  </div>
);

export default LoginPage;
