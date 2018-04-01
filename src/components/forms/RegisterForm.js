import React from "react";

import { createUser } from "../helpers/auth";
import history from "../helpers/history";

import Paper from "material-ui/Paper";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import Typography from "material-ui/Typography";

//const isInvalid = passwordOne !== passwordTwo;

export default class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      registerError: null
    };
  }

  //inline error message with event
  setErrorMsg = error => {
    this.setState({ registerError: error.message });
  };
  //global onchange for state
  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    //reset the error if exist
    if (this.state.registerError != null) {
      this.setState({ registerError: null });
    }
  };
  //submit new user information
  onSubmit = e => {
    e.preventDefault();
    createUser(this.state.email, this.state.password).catch(e =>
      this.setErrorMsg(e)
    );
    //history.push("/dashboard");
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={styles.container}>
        <Paper style={styles.paper}>
          <Typography variant="title" color="inherit" style={styles.typo}>
            Register
          </Typography>
          <TextField
            id="email"
            label="Email"
            placeholder="Enter your Email"
            style={styles.textField}
            onChange={this.onChange}
            value={this.state.email}
            type="email"
          />
          <TextField
            id="password"
            type="password"
            label="Password"
            placeholder="Create a password"
            style={styles.textField}
            onChange={this.onChange}
            value={this.state.password}
          />
          {this.state.registerError && (
            <div>
              <p>Error: {this.state.registerError}</p>
            </div>
          )}
          <Button
            label="register"
            color="primary"
            variant="raised"
            style={styles.button}
            type="submit"
          >
            Register
          </Button>
        </Paper>
      </form>
    );
  }
}

const styles = {
  textField: {
    width: 300,
    marginTop: 0,
    marginBottom: 10
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 320,
    maxWidth: 400,
    height: "auto",
    position: "absolute",
    top: "30%",
    left: 0,
    right: 0,
    margin: "auto",
    textAlign: "center",
    required: "hidden"
  },
  paper: {
    padding: 20,
    overflow: "auto"
  },
  button: {
    width: 300,
    marginTop: 20,
    marginBottom: 10
  },
  typo: {
    fontSize: 30
  }
};
