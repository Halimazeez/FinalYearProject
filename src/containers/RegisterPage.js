import React from "react";

import RegisterForm from "../components/forms/RegisterForm";
import history from "../components/helpers/history";
import { firebaseAuth } from "../components/helpers/dbCon";

firebaseAuth().onAuthStateChanged(user => {
  if (user) {
    history.push("/dashboard");
  } else {
    //otherwise goto login page
  }
});

const RegisterPage = () => (
  <div>
    <RegisterForm />
  </div>
);

export default RegisterPage;
